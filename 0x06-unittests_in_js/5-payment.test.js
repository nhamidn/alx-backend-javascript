const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    assert.strictEqual(consoleSpy.calledWith('The total is: 120'), true);
    assert.strictEqual(consoleSpy.callCount, 1);
  });

  it('should log "The total is: 20" when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    assert.strictEqual(consoleSpy.calledWith('The total is: 20'), true);
    assert.strictEqual(consoleSpy.callCount, 1);
  });
});

