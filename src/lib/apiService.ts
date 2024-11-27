import axios from "axios";
import { LoginResponse } from "./dto";

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

export async function getFacultyCourses() {
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
