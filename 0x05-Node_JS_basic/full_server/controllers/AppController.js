class AppController {
  static getHomepage(req, res) {
    sre.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
