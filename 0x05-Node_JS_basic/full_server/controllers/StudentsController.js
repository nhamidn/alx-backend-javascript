const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const dbPath = process.argv.length > 2 ? process.argv[2] : '';
      const students = await readDatabase(dbPath);
      let response = 'This is the list of our students';
      Object.keys(students).sort().forEach((field) => {
        const studentNames = students[field].map((student) => student.firstname).join(', ');
        response += `\nNumber of students in ${field}: ${students[field].length}. List: ${studentNames}`;
      });
      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const dbPath = process.argv.length > 2 ? process.argv[2] : '';
      const students = await readDatabase(dbPath);
      if (!students[major]) {
        return res.status(404).send('Major not found');
      }
      const studentNames = students[major].map((student) => student.firstname).join(', ');
      return res.status(200).send(`List: ${studentNames}`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
