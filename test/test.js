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
        });

        it('gives type hints precedence over best guess', function() {
            match("age:string==34", {age: "34"});
            match("age:string==25.5", {age: "25.5"});
            match("enabled:string==true", {enabled: "true"});
            match("status:string==rejected", {status: "rejected"});
            match("time:string=ge=2017-11-23T00:00:00.000Z", {time: "2017-11-27T00:00:00.000Z"});
        });
    });

    describe('equality', function() {
        it('parses as expected', function() {
            match("enabled==true", {enabled: true});
            match("enabled!=true", {enabled: false});
            noMatch("enabled!=true", {enabled: true});
            match("et=='phone home'", {et: ["phone home"]});
            match("et=='phone home'", {et: ["phone home", "the extra-terrestrial"]});
            noMatch("et=='phone home'", {et: []});
            noMatch("et=='phone home'", {et: null});
            noMatch("et=='phone home'", {et: ["the extra-terrestrial"]});
            noMatch("et=='phone home'", {marvinTheMartian: "phone home"});
            match("et!='phone home'", {et: []});
            match("et!='phone home'", {et: null});
            match("et!='phone home'", {et: ["the extra-terrestrial"]});
            match("et!='phone home'", {et: ["the extra-terrestrial", "elliot"]});
            match("et!='phone home'", {alienVsPredator: "phone home"});
            noMatch("et!='phone home'", {et: ["phone home"]});
            noMatch("et!='phone home'", {et: ["phone home", "elliot"]});
        });
    });

    describe('relational operators', function() {
        it('parses as expected', function() {
            match("name=gt=paul", {name: "pbul"});
            noMatch("name=gt=paul", {name: "paul"});

            match("name=ge=paul", {name: "paul"});
            noMatch("name=ge=paul", {name: "oaul"});

            match("name=lt=paul", {name: "alfred"});
            noMatch("name=lt=paul", {name: "pbul"});

            match("name=le=paul", {name: "paul"});
            noMatch("name=le=paul", {name: "raul"});
        });
    });

    describe('string coercion without quotes', function() {
        it('handles common separators without requiring quotes', function() {
            match("name==PAUL_R", {name: ["PAUL_R"]});
            match("name==PAULY-R", {name: ["PAULY-R"]});
        });
    });

    describe('regexp operator', function() {
        it('parses as expected', function() {
            match("friends=re=paul.*", {friends: "paulypocket"});
            noMatch("friends=re=paul.*", {friends: "bert"});
        });
    });

    describe('logical or', function() {
        it('combines as expected', function() {
            match("firstName==Paul,firstName==John", {firstName: "Paul"});
            match("firstName==Paul,firstName==John", {firstName: "John"});
            noMatch("firstName==Paul,firstName==John", {firstName: "Jerry"});
        });
    });

    describe('logical and', function() {
        it('combines as expected', function() {
            match("firstName==Paul;lastName=ex=false", {firstName: "Paul"});
            noMatch("firstName==Paul;firstName==John", {firstName: "Paul"});
        });
    });

    describe('multi-operators', function() {
        it('parse as expected', function() {
            match("firstName=in=(Paul,John)", {firstName: "Paul"});
            match("firstName=in=(Paul,John)", {firstName: "John"});
            noMatch("firstName=in=(Paul,John)", {firstName: "Jerry"});
            noMatch("firstName=out=(Paul,John)", {firstName: "Paul"});
            noMatch("firstName=out=(Paul,John)", {firstName: "John"});
            match("firstName=out=(Paul,John)", {firstName: "Jerry"});
        });
    });

    describe('reaching into nested objects using dot delimited paths', function() {
        it('reaches in as expected', function() {
            match("friend.bestFriend.age:string==24", {friend: {bestFriend: {age: "24"}}});
            noMatch("friend.bestFriend.age:string!=24", {friend: {bestFriend: {age: "24"}}});
        });
        it('handles existence checks safely even if there is no intermediate object along the path', function() {
            match("friend.bestFriend.firstName=ex=false", {friend: {worstFriend: {firstName: "Jerry"}}});
            noMatch("friend.bestFriend.firstName=ex=true", {friend: {worstFriend: {firstName: "Jerry"}}});
        });
    });
});