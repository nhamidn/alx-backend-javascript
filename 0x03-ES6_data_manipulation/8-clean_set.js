export default function cleanSet(set, startString) {
  const resultArray = [];
  if (startString === '') {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      resultArray.push(value.slice(startString.length));
    }
  });

  return resultArray.join('-');
}
