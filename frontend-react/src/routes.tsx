import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import EmployeeList from "views/admin/marketplace";
import Profile from "views/admin/profile";

import DataTables from "views/admin/tables";

// Auth Imports
import SignIn from "views/auth/SignIn";

//user imports
import ProfileUser from "views/user/default";
import FindJobs from "views/user/jobs";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAddAlert,
} from "react-icons/md";

import { RiUserSearchFill, RiSuitcaseLine } from "react-icons/ri";
import AddEmployee from "views/admin/add-employee";
import { BsListStars, BsPersonPlus } from "react-icons/bs";
import ProfileVerify from "views/user/verify";
import PushAlerts from "views/admin/push-alerts";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Employee List",
    layout: "/admin",
    path: "employee-list",
    icon: <BsListStars className="h-6 w-6" />,
    component: <EmployeeList />,
    secondary: true,
  },
  {
    name: "Add Employees",
    layout: "/admin",
    path: "add-employees",
    icon: <BsPersonPlus className="h-6 w-6" />,
    component: <AddEmployee />,
    secondary: true,
  },
  {
    name: "Push alerts",
    layout: "/admin",
    path: "push-alerts",
    icon: <MdAddAlert className="h-6 w-6" />,
    component: <PushAlerts />,
  },
  {
    name: "User Profile",
    layout: "/user",
    path: "default",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ProfileUser />,
  },
  {
    name: "Verify User",
    layout: "/user",
    path: "verify",
    icon: <RiUserSearchFill className="h-6 w-6" />,
    component: <ProfileVerify />,
  },
  {
    name: "Find Jobs",
    layout: "/user",
    path: "jobs",
    icon: <RiSuitcaseLine className="h-6 w-6" />,
    component: <FindJobs />,
  },
];
export default routes;
