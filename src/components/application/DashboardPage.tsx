import { useAuth } from "@/context/AuthContext";
import UserProfile from "../presentation/UserProfile";

function DashboardPage() {
  const auth = useAuth();

  if (!auth?.user) return;

  return <UserProfile user={auth?.user} />;
}

export default DashboardPage;
