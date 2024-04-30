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
    .split('\n')
    .filter((line) => line.trim() !== '');

  const headers = lines[0].split(',');
  const studentGroups = {};

  lines.slice(1).forEach((line) => {
    const studentData = line.split(',');
    const field = studentData.pop();
    const student = headers.slice(0, -1).reduce((newObj, header, index) => ({
      ...newObj,
      [header]: studentData[index],
    }), {});

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    studentGroups[field].push(student);
  });

  const totalStudents = Object.values(studentGroups).reduce((acc, cur) => acc + cur.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  Object.entries(studentGroups).forEach(([field, students]) => {
    const names = students.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${students.length}. List: ${names}`);
  });
}

module.exports = countStudents;
