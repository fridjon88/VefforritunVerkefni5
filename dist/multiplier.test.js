'use strict';

var chai = require('chai');
var multiplier = require('./multiplier');

var should = chai.should();

describe('splitIntoNumbers', function () {});

describe('multiply', function () {
  it('should multiply two numbers', function () {
    multiplier.multiply([1, 2]).should.equal(2);
  });
});

describe('factorize', function () {});