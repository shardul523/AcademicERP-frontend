import { FormEvent, useState } from "react";
import LoginForm from "../presentation/LoginForm";
import { loginUser } from "@/lib/apiService";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handlerLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    console.log("Login attempted with:", { email, password });
    loginUser(email, password);

    setError("");
  };

  return (
    <LoginForm
      handlerLogin={handlerLogin}
      error={error}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
}

export default LoginPage;
