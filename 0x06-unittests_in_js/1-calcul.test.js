const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should add two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should subtract two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', function() {
    it('should divide two rounded numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when attempting to divide by zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Edge cases and error handling', function() {
    it('should throw an error for invalid type', function() {
      assert.throws(() => calculateNumber('INVALID', 2, 3), {
        name: 'Error',
        message: 'Invalid type'
      });
    });
  });
});

