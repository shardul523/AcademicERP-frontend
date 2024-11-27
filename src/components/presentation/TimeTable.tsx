import { getDayName, getTimeSlot } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router";

interface FormattedCoursesProps {
  room: string | null;
  building: string | null;
  day: number;
  name: string | null;
  time: number;
  specialisation: string;
  code: string;
}

function TimeTable({
  courses,
}: {
  courses: FormattedCoursesProps[] | undefined;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Weekly Timetable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border text-left">Day</th>
                  <th className="p-3 border text-left">Time</th>
                  <th className="p-3 border text-left">Subject Code</th>
                  <th className="p-3 border text-left">Subject</th>
                  <th className="p-3 border text-left">Specialisation</th>
                  <th className="p-3 border text-left">Room</th>
                </tr>
              </thead>
              <tbody>
                {courses?.map((course) => (
                  <tr
                    className="hover:bg-gray-50"
                    key={course.code + course.day + course.time}
                  >
                    <td className="p-3 border">{getDayName(course.day)}</td>
                    <td className="p-3 border">{getTimeSlot(course.time)}</td>
                    <td className="p-3 border">{course.code}</td>
                    <td className="p-3 border">
                      <Link
                        className="hover:underline underline-offset-2"
                        to={`/course/${course.code}/students`}
                      >
                        {course.name}
                      </Link>
                    </td>
                    <td className="p-3 border">{course.specialisation}</td>
                    <td className="p-3 border">
                      {course.building + " " + course.room}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TimeTable;