import { Routes, Route, Navigate } from "react-router-dom";

import ViewLayout from "layouts/view-employee";
import ViewProfile from "layouts/view-profile";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import UserLayout from "layouts/user";
import { useContext, useEffect } from "react";
import { UserContext } from "providers/UserContext";
import SignIn from "layouts/auth";
import Profile from "views/admin/profile";
import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    alanBtn({
      key: "8bed6778465e8cbf2efbe9e7be22715a2e956eca572e1d8b807a3e2338fdd0dc/stage",
    });
  }, []);

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    );
  }
  if (user && user.email === "ishaan.shah@gmail.com") {
    return (
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="view-employee/*" element={<ViewLayout />} />"
        <Route path="view-profile/*" element={<ViewProfile />} />"
        <Route path="/" element={<SignIn />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        {/* <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} /> */}
        <Route path="user/*" element={<UserLayout />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    );
  }
};

export default App;
