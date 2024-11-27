import axios from "axios";
import { CoursesResponse, LoginResponse } from "./dto";

const BASE_URL = "http://localhost:8080/api/v1";
let token: string;

export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse | null> {
  try {
    const response = await axios.post(`${BASE_URL}/auth/employee`, {
      email,
      password,
    });

    token = response?.data?.jwt;

    return response.data;
  } catch (err: unknown) {
    console.error(err);
    return null;
  }
}

export async function getEmployeeCourses(): Promise<CoursesResponse[] | null> {
  try {
    const response = await axios.get(`${BASE_URL}/employee/courses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err: unknown) {
    console.error(err);
    return null;
  }
}

export async function getEmployeeDetails() {
  try {
    const response = await axios.get(`${BASE_URL}/employee`,
      {headers: {'Authorization':  `Bearer ${token}`}}
    )
    return response?.data;
  } catch(err: unknown) {
    console.error(err);
    return null;
  }
}