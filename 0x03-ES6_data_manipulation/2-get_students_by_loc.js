export default function getStudentsByLocation(arr, city) {
  return arr.filter((a) => a.location === city);
}
