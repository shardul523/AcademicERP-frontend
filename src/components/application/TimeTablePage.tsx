import { useEmployeeCourses } from "@/hooks";
import TimeTable from "../presentation/TimeTable";

function TimeTablePage() {
  const courses = useEmployeeCourses();

  const formattedCourses = courses?.map((val) => {
    return {
      room: val.courseSchedule.room,
      building: val.courseSchedule.building,
      day: val.courseSchedule.day,
      name: val.courseSchedule.course.name,
      time: val.courseSchedule.time,
      specialisation: val.specialisation,
      code: val.courseSchedule.course.courseCode,
    };
  });

  courses?.sort((a, b) => {
    if (a.courseSchedule.day === b.courseSchedule.day)
      return a.courseSchedule.time - b.courseSchedule.time;
    return a.courseSchedule.day - b.courseSchedule.day;
  });

  console.log(formattedCourses);
  return <TimeTable courses={formattedCourses} />;
}

export default TimeTablePage;
