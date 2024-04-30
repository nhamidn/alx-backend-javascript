const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const lines = fs.readFileSync(path, 'utf8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const headers = lines[0].split(',');

  const students = lines.slice(1).map((line) => {
    const values = line.split(',');
    const studentObj = {};
    headers.forEach((header, index) => {
      studentObj[header] = values[index];
    });
    return studentObj;
  });

  const groupedByField = {};
  students.forEach((student) => {
    if (!groupedByField[student.field]) {
      groupedByField[student.field] = [];
    }
    groupedByField[student.field].push(student);
  });
  console.log(`Number of students: ${students.length}`);
  Object.keys(groupedByField).forEach((field) => {
    const names = groupedByField[field].map((student) => student.firstname);
    console.log(`Number of students in ${field}:`,
      `${groupedByField[field].length}.`,
      'List:',
      names.join(', '));
  });
}

module.exports = countStudents;
