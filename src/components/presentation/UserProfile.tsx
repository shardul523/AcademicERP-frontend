import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Tag } from "lucide-react";
import { User as UserType } from "@/lib/dto";

const UserProfile = ({ user }: { user: UserType }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center justify-between">
            User Profile
            <Badge variant="outline">Active</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* First Name Detail */}
            <div className="flex items-center space-x-4">
              <User className="text-gray-500" size={24} />
              <div>
                <p className="font-medium">First Name</p>
                <p className="text-gray-600">{user.firstName}</p>
              </div>
            </div>

            {/* Last Name Detail */}
            <div className="flex items-center space-x-4">
              <User className="text-gray-500" size={24} />
              <div>
                <p className="font-medium">Last Name</p>
                <p className="text-gray-600">{user.lastName}</p>
              </div>
            </div>

            {/* Email Detail */}
            <div className="flex items-center space-x-4">
              <Mail className="text-gray-500" size={24} />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            {/* Title Detail */}
            <div className="flex items-center space-x-4">
              <Tag className="text-gray-500" size={24} />
              <div>
                <p className="font-medium">Professional Title</p>
                <p className="text-gray-600">{user.title}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
