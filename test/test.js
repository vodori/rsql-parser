const expect = require('chai').expect;
const Parser = require('../index').PredicateParser;

describe('Parsing', function () {

    const parser = new Parser();


    describe('existence', function () {
        it('true on truthy values', function () {
            const expression = "things=ex=true";
            const predicate = parser.parse(expression);
            expect(predicate({things: "stuff"})).to.be.true;
            expect(predicate({things: 1})).to.be.true;
        });

        it('true on falsey value', function () {
            const expression = "things=ex=true";
            const predicate = parser.parse(expression);
            expect(predicate({things: false})).to.be.true;
            expect(predicate({things: 0})).to.be.true;
        });

        it('false on null or undefined', function () {
            const expression = "things=ex=true";
            const predicate = parser.parse(expression);
            expect(predicate({things: null})).to.be.false;
            expect(predicate({})).to.be.false;
        });
    });


});