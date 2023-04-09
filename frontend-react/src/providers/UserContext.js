import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({
    userEmail: "",
    userPassword: "",
    isVerified: false,
  });

  const [jobData, setJobData] = useState({
    jobTitle: "Main chef position",
    jobDescription:
      "As a chef, you will be responsible for creating and executing high-quality dishes in a timely manner. You will manage the kitchen staff, maintain inventory, and ensure that the kitchen adheres to health and safety standards.",
    jobSalary: "$350/day",
    jobExperience: "3 yrs",
    jobType: "Freelance",
  });

  const [resumeData, setResumeData] = useState({
    email: "",
    phone: "",
    name: "",
    total_exp: "",
    university: "",
    designation: "",
    degree: "",
    skills: [],
    companies: [],
  });

  const [aadharData, setAadharData] = useState({
    name: "",
    dob: "",
    gender: "",
  });

  const handleJobChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleResume = (e) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      [name]: value,
    });
  };

  const handleAadhar = (e) => {
    const { name, value } = e.target;
    setAadharData({
      ...aadharData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: error.message,
      });
    }
  };

  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: "success",
        title: "Signup Successful",
        text: "You have successfully signed up.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Error",
        text: error.message,
      });
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      Swal.fire({
        icon: "success",
        title: "Logout Successful",
        text: "You have successfully logged out.",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Logout Error",
        text: error.message,
      });
    }
  };

  const googleLogin = async () => {
    let userObj = {};
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
        .then((result) => {
          userObj = result.user;
          console.log(userObj);
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Google Login Successful",
            text: "You have successfully logged in.",
          }).then(() => {
            if (userObj.email === "ishaan.shah@gmail.com") {
              navigate("/admin/default");
            } else {
              navigate("/user/default");
            }
          });
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Error",
        text: error.message,
      });
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,
    googleLogin,
    userData,
    setUserData,
    handleInputChange,
    jobData,
    setJobData,
    handleJobChange,
    resumeData,
    setResumeData,
    aadharData,
    setAadharData,
    handleResume,
    handleAadhar,
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};
