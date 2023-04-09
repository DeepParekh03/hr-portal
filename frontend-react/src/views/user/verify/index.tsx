import { UserContext } from "providers/UserContext";
import React from "react";
import Camera from "./components/CameraComponent";
import VerifiedForm from "./components/VerifiedForm";

type Props = {};

const ProfileVerify = (props: Props) => {
  const { userData, setUserData } = React.useContext(UserContext);

  return (
    <div className="mt-[2%] min-h-screen">
      {userData.isVerified ? <Camera /> : <VerifiedForm />}
    </div>
  );
};

export default ProfileVerify;
