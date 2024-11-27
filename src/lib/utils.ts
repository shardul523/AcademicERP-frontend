import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDayName(dayNumber: number): string {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid";
  }
}

export function getTimeSlot(timeslot: number): string {
  switch (timeslot) {
    case 1:
      return "8:00 A.M. - 9:15 A.M.";
    case 2:
      return "9:30 A.M. - 11:00 A.M.";
    case 3:
      return "11:30 A.M. - 1:00 P.M.";
    case 4:
      return "1:45 P.M. - 3:00 A.M.";
    case 5:
      return "3:30 P.M. - 5:00 A.M.";
    default:
      return "Invalid";
  }
}

export function storeTokenLocal(token: string | null): void {
  if (token === null) return localStorage.setItem("jwt", "");
  localStorage.setItem("jwt", token);
}

export function getTokenLocal() {
  return localStorage.getItem("jwt");
}
