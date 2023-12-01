export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.checkName(name);
    this._length = this.checkLength(length);
    this._students = this.checkStudents(students);
  }

  checkName(name) {
    if (typeof name === 'string') {
      return name;
    }
    throw new TypeError('Name must be a string');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.checkName(newName);
  }

  checkLength(length) {
    if ((typeof length !== 'number') && !(length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.checkLength(newLength);
  }

  checkStudents(students) {
    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      return students;
    }
    throw new TypeError('Students must be an array of strings');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.checkStudents(newStudents);
  }
}
