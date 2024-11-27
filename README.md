# Faculty Time Table Display Portal

## Overview

This is a React-based web application designed for faculty members to be able to view their weekly schedules as well as the list of students enrolled in their courses.

The application incorporates a layered architecture, ensuring modularity, scalability, and ease of maintenance. It provides the following features:

- **Login Page**: Secure JWT authentication for faculty members.
- **Dashboard**: A personalized overview of user details.
- **Time Table**: A detailed view of the faculty member's schedule.
- **Course Students List**: A list of students enrolled in specific courses.

The **code architecture** follows a _layered-architecture_.

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn package manager

### Installation

- Clone the repository:

```bash
git clone https://github.com/your-repo/faculty-portal.git
```

- Navigate to the project directory:

```bash
cd faculty-portal
```

- Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```
npm run dev
```

The application will be accessible at http://localhost:5173.

### Building for Production

To create an optimized build for production:

```bash
npm run build
```

The build files will be located in the build/ directory.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For navigation and routing between pages.
- **Axios**: For making API requests.
- **Shadcn**: Component Library for styling.
- **Node.js**: For package management and build tools.
- **react-hot-toast**: For popup messages
