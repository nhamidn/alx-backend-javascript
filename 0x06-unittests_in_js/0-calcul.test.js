const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should add two positive numbers with rounding', function() {
    assert.strictEqual(calculateNumber(1.5, 2.4), 4);
  });

  it('should add two negative numbers with rounding', function() {
    assert.strictEqual(calculateNumber(-1.5, -2.4), -3);
  });

  it('should add a positive and a negative number with rounding', function() {
    assert.strictEqual(calculateNumber(-1.5, 2.6), 2);
  });

  it('should handle cases where one number is zero', function() {
    assert.strictEqual(calculateNumber(0, 2.6), 3);
  });

  it('should handle cases where both numbers are zero', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should correctly round and add floating point numbers', function() {
    assert.strictEqual(calculateNumber(2.3, 2.5), 5);
  });

  it('should handle large numbers', function() {
    assert.strictEqual(calculateNumber(1e10 - 0.1, 1e10 + 0.1), 20000000000);
  });
});
