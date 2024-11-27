import { FormEvent, useState } from "react";
import LoginForm from "../presentation/LoginForm";
import { loginUser } from "@/lib/apiService";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router";
import toast from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const auth = useAuth();

  if (auth !== null && auth.isAuthenticated === true)
    return <Navigate to={"/dashboard"} replace />;

  const handlerLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setError("");

    const res = await loginUser(email, password);

    if (res !== null && res.authenticated === true) {
      auth?.setIsAuthenticated(true);
      toast.success("Login successful");
    } else {
      toast.error("Invalid email / password");
    }
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
