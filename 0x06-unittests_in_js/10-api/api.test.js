const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Index page', function() {
  it('should return correct status code', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  it('should return correct status code when :id is a number', function(done) {
    request('http://localhost:7865/cart/12', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 when :id is not a number', function(done) {
    request('http://localhost:7865/cart/hello', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments', function() {
  it('should return the correct payment methods', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      const data = JSON.parse(body);
      expect(response.statusCode).to.equal(200);
      expect(data).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login', function() {
  it('should welcome the user by name', function(done) {
    request.post({
      url: 'http://localhost:7865/login',
      body: JSON.stringify({ userName: "Betty" }),
      headers: { 'Content-Type': 'application/json' }
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
