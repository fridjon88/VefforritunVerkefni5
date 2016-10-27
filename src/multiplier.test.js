const chai = require('chai');
const multiplier = require('./multiplier');

const should = chai.should();

describe('splitIntoNumbers', () => {
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    multiplier.multiply([1, 2]).should.equal(2);
  });
});

describe('factorize', () => {
});
