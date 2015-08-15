'use strict';

var currency = require('../src/index')
  , assert = require('assert');

describe('Currency formatter', function () {

  it('should format simple numbers', function () {
    assert.equal(currency(100, {
      symbol: '$',
      format: '%s%v'
    }).val, '$100');
  });

  it('should format insert decimal places', function () {
    assert.equal(currency(100.123, {
      symbol: '$',
      format: '%s%v',
      decimalPlaces: 2
    }).val, '$100.12');
  });

  it('should format accept decimal and thousands separator', function () {
    assert.equal(currency(15000.447, {
      symbol: 'руб.',
      decimalSeparator: ',',
      groupingSeparator: ' ',
      decimalPlaces: 2
    }).val, '15 000,45 руб.');
  });

  it('should accept negative numbers', function () {
    assert.equal(currency(-1000.447, {
      symbol: 'руб.',
      decimalSeparator: ',',
      groupingSeparator: ' ',
      decimalPlaces: 2
    }).val, '–1 000,45 руб.');
  });

});
