import { getEmployeeDetails } from "@/lib/apiService";
import { User } from "@/lib/dto";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({children} : {children : React.ReactElement}) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getEmployeeDetails().then((val) => {
            if (val === null) {
                setUser(null);
            } else {
                setUser(val);
            }
        });
    }, [isAuthenticated]);


    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;