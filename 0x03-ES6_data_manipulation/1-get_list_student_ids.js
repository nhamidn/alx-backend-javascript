export default function getListStudentIds(arr) {
  let list = [];
  if (arr instanceof Array) {
    list = arr.map((a) => a.id);
  }
  return list;
}
