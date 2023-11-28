export default function createIteratorObject(report) {
  const iterator = [];
  for (const employees of Object.entries(report.allEmployees)) {
    for (const employe of employees[1]) {
      iterator.push(employe);
    }
  }
  return iterator;
}
