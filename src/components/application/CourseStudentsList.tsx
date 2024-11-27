import { useCourseStudents } from "@/hooks";
import { useParams } from "react-router";
import StudentsTable from "../presentation/StudentsTable";

function CourseStudentsList() {
  const { courseCode } = useParams();
  const students = useCourseStudents(courseCode);
  console.log(students);

  return <StudentsTable students={students} />;
}

export default CourseStudentsList;
