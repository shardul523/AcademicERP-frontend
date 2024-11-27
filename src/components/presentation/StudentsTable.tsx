import { Student } from "@/lib/dto";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function StudentsTable({ students }: { students: Student[] | null }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            <h2>Enrolled Students</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border text-left">Roll Number</th>
                  <th className="p-3 border text-left">Name</th>
                  <th className="p-3 border text-left">Email</th>
                  <th className="p-3 border text-left">Specialisation</th>
                </tr>
              </thead>
              <tbody>
                {students?.map((student) => (
                  <tr key={student.rollNumber} className="hover:bg-gray-50">
                    <td className="p-3 border">{student.rollNumber}</td>
                    <td className="p-3 border">
                      {student.firstName + " " + student.lastName}
                    </td>
                    <td className="p-3 border">{student.email}</td>
                    <td className="p-3 border">{student.specialisation}</td>
                  </tr>
                ))}
                {/* {courses?.map((course) => (
                      <tr
                        className="hover:bg-gray-50"
                        key={course.code + course.day + course.time}
                      >
                        <td className="p-3 border">{getDayName(course.day)}</td>
                        <td className="p-3 border">{getTimeSlot(course.time)}</td>
                        <td className="p-3 border">
                          <Link
                            className="hover:underline underline-offset-2"
                            to={`/courses/${course.code}`}
                          >
                            {course.name}
                          </Link>
                        </td>
                        <td className="p-3 border">{course.specialisation}</td>
                        <td className="p-3 border">
                          {course.building + " " + course.room}
                        </td>
                      </tr>
                    ))} */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default StudentsTable;
