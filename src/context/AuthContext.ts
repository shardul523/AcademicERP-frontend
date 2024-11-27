import { User } from "@/lib/dto";
import { createContext, useContext } from "react";

interface AuthType {
    isAuthenticated: boolean;
    user: User | null;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthType | null>(null);

export const useAuth = () => useContext(AuthContext);