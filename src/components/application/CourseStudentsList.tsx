import { useCourseStudents } from "@/hooks";
import { useParams } from "react-router";
import StudentsTable from "../presentation/StudentsTable";

function CourseStudentsList() {
  const { courseCode } = useParams();
  const students = useCourseStudents(courseCode);

  if (students === null || students[0] === null)
    return (
      <div className="flex justify-center mt-5 flex-grow">
        <p>No students enrolled in this course !</p>
      </div>
    );

  return <StudentsTable students={students} />;
}

export default CourseStudentsList;
