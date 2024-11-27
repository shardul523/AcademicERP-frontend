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