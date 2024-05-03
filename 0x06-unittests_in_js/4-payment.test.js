const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy, calculateNumberStub;

  beforeEach(function() {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call calculateNumber with "SUM", 100, and 20 and log the correct message', function() {
    sendPaymentRequestToApi(100, 20);
    assert.ok(calculateNumberStub.calledWith('SUM', 100, 20));
    assert.ok(calculateNumberStub.calledOnce);
    assert.ok(consoleSpy.calledWith('The total is: 10'));
  });
});
