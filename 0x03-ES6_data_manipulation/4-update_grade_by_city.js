export default function updateStudentGradeByCity(arr, city, newGrades) {
  const newArr = arr.filter((a) => a.location === city);
  return newArr.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: matchingGrade ? matchingGrade.grade : 'N/A' };
  });
}
