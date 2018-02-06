const expect = require('chai').expect;
const Parser = require('../index').PredicateParser;

describe('Parsing', function () {

    const parser = new Parser();


    const match = function (rsql, data) {
        const predicate = parser.parse(rsql);
        expect(predicate(data)).to.be.true;
    };

    const noMatch = function (rsql, data) {
        const predicate = parser.parse(rsql);
        expect(predicate(data)).to.be.false;
    };

    describe('=ex=', function () {
        it('true on truthy values', function () {
            match("things=ex=true", {things: true});
            match("things=ex=true", {things: "stuff"});
            match("things=ex=true", {things: 1});
            noMatch("things=ex=false", {things: true});
            noMatch("things=ex=false", {things: "stuff"});
            noMatch("things=ex=false", {things: 1});
        });

        it('true on falsey value', function () {
            match("things=ex=true", {things: false});
            match("things=ex=true", {things: 0});
            match("things=ex=true", {things: ""});
            noMatch("things=ex=false", {things: false});
            noMatch("things=ex=false", {things: 0});
            noMatch("things=ex=false", {things: ""});
        });

        it('false on null or undefined', function () {
            match("things=ex=false", {things: null});
            match("things=ex=false", {});
            noMatch("things=ex=true", {things: null});
            noMatch("things=ex=true", {});
        });
    });

    describe('coercion', function () {
        it('uses best guess when there is no type hint', function () {
            match("age==34", {age: 34});
            match("age==25.5", {age: 25.5});
            match("enabled==true", {enabled: true});
            match("display==visible", {display: "visible"});
        })
    });

});