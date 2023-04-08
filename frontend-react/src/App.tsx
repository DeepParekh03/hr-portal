import { Routes, Route, Navigate } from "react-router-dom";


import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import UserLayout from "layouts/user";
import { useContext } from "react";
import { UserContext } from "providers/UserContext";
import SignIn from "layouts/auth";
const App = () => {
  const { user } = useContext(UserContext);
  if (!user) {
     return (
      <Routes>
   <Route
        path="/" element={<SignIn />}
                    />
      </Routes>
     )
  }
  if(user && user.email === 'bhavya.gor9999@gmail.com'){
    return (
      <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      
      <Route
      path="/" element={<SignIn />}
      />
    </Routes>
        
    )
  }
  else{
    return (
      <Routes>
        {/* <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} /> */}
        <Route path="user/*" element={<UserLayout />} />
        <Route
        path="/" element={<SignIn />}
        />
      </Routes>
    );
  }
 
};

export default App;
