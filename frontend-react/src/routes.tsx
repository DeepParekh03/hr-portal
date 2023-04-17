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
import FindJobs from "../src/views/user/jobs/index";
import JobPostings from "views/admin/job-postings";
// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAddAlert,
  MdOutlineAddHomeWork,
  MdStorage,
} from "react-icons/md";

import { RiUserSearchFill, RiSuitcaseLine } from "react-icons/ri";
import AddEmployee from "views/admin/add-employee";
import { BsListStars, BsPersonPlus } from "react-icons/bs";
import ProfileVerify from "views/admin/verify-models";
import PushAlerts from "views/admin/push-alerts";
import ListEmployee from "views/admin/list-employee";
import ReferEmployee from "views/admin/refer-employee";
import { VscPreview, VscUnverified } from "react-icons/vsc";
import ViewVideo from "views/admin/view-mp4";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
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
    name: "Run verifications",
    layout: "/admin",
    path: "run-verifications",
    icon: <VscUnverified className="h-6 w-6" />,
    component: <ProfileVerify />,
    secondary: true,
  },
  {
    name: "Applicants List",
    layout: "/admin",
    path: "list-applicants",
    icon: <MdStorage className="h-6 w-6" />,
    component: <ListEmployee />,
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
    name: "Post job openings",
    layout: "/admin",
    path: "post-job-openings",
    icon: <MdOutlineAddHomeWork className="h-6 w-6" />,
    component: <JobPostings />,
    secondary: true,
  },
  {
    name: "Refer a employee",
    layout: "/admin",
    path: "refer-employees",
    icon: <VscPreview className="h-6 w-6" />,
    component: <ReferEmployee />,
    secondary: true,
  },
  {
    name:"MP4 play",
    layout: "/admin",
    path: "mp4-play",
    icon: <AiOutlineVideoCameraAdd className="h-6 w-6" />,
    component: <ViewVideo />,
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
