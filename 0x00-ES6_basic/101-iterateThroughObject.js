export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const [idx, name] of reportWithIterator.entries()) {
    if (idx !== (reportWithIterator.length - 1)) {
      employees += `${name} | `;
    } else {
      employees += name;
    }
  }
  return employees;
}
