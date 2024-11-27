import { useEffect, useState } from "react";
import { CoursesResponse, Student } from "./lib/dto";
import { getCourseStudents, getEmployeeCourses } from "./lib/apiService";

export const useEmployeeCourses = () => {
  const [courses, setCourses] = useState<CoursesResponse[] | null>(null);

  useEffect(() => {
    getEmployeeCourses().then(setCourses);
  }, [setCourses]);

  return courses;
};

export const useCourseStudents = (courseCode: string | undefined) => {
  const [students, setStudents] = useState<Student[] | null>(null);

  useEffect(() => {
    if (!courseCode) return;
    getCourseStudents(courseCode).then(setStudents);
  }, [courseCode]);

  return students;
};
