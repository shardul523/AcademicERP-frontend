export interface LoginResponse {
  authenticated: boolean;
  message: string;
  jwt: string | null;
}

export interface User {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  title: string | null;
  photographPath: string | null;
}

export interface Course {
  capacity: number | null;
  courseCode: string;
  credits: number | null;
  description: string | null;
  faculty: string | null;
  name: string | null;
  term: string | null;
  year: number | null;
}

export interface CourseSchedule {
  course: Course;
  building: string | null;
  day: number;
  time: number;
  room: string | null;
}

export interface CoursesResponse {
  courseSchedule: CourseSchedule;
  specialisation: string;
}

export interface Student {
  email: string;
  firstName: string;
  lastName: string;
  rollNumber: string;
  photographPath: string;
  specialisation: string;
}
