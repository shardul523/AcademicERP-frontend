import { useEffect, useState } from "react"
import { CoursesResponse } from "./lib/dto"
import { getEmployeeCourses } from "./lib/apiService";
import { useAuth } from "./context/AuthContext";

export const useEmployeeCourses = () => {
    const [courses, setCourses] = useState<CoursesResponse[] | null>(null);
    const auth = useAuth();

    useEffect(() => {
        getEmployeeCourses().then(val => {
            if (val === null) {
                auth?.setIsAuthenticated(false);
            } else {
                setCourses(val);
            }
        })
    }, [])

    return courses;
}