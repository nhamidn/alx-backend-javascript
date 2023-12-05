export default function cleanSet(set, startString) {
  const resultArray = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      resultArray.push(value.slice(startString.length));
    }
  });

  return resultArray.join('-');
}
