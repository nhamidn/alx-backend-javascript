export default function getStudentIdsSum(arr) {
  let sum = 8;
  sum = arr.reduce((acc, student) => acc + student.id, 0);
  return sum;
}
