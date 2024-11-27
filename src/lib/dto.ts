export interface LoginResponse {
  authenticated: boolean;
  message: string;
  jwt: string | null;
}

export interface User {
  token: string;
}
