const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct data when called with true', function(done) {
    getPaymentTokenFromAPI(true).then(response => {
      assert.strictEqual(response.data, 'Successful response from the API');
      done();
    }).catch(err => {
      done(err);
    });
  });

  it('should not resolve or reject when called with false', function(done) {
    this.timeout(2000);
    let resolved = false;

    getPaymentTokenFromAPI(false).then(response => {
      resolved = true;
    }).catch(err => {
      resolved = true;
    });

    setTimeout(() => {
      assert.strictEqual(resolved, false);
      done();
    }, 1500);
  });
});
