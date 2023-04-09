import { UserContext } from "providers/UserContext";
import React, { useContext, useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import { VscVerifiedFilled } from "react-icons/vsc";
import Upload from "views/user/default/components/Upload";
import CameraComponent from "./CameraComponent";

type Props = {};

const VerifiedForm = (props: Props) => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const { resumeData, aadharData, handleAadhar, handleResume } =
    useContext(UserContext);

  const updateProfile = () => {};
  return (
    <div>
      <div className="mt-[1%] flex flex-col gap-y-2">
        <h1 className="text-bold flex items-center  text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
          Congratulations you are{" "}
          <span>
            <VscVerifiedFilled size={30} className="text-green-600" />
          </span>
          , check the data
        </h1>
        <h1 className="text-bold text-xl tracking-[1.5px] ">Name</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input-success input w-full"
          name="name"
          value={resumeData.name}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">DOB</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input-success input w-full"
          name="dob"
          value={aadharData.dob}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">Gender</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input-success input w-full"
          name="gender"
          value={aadharData.gender}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">Email</h1>
        <input
          type="text"
          className="input-bordered input-success input w-full"
          name="email"
          value={resumeData.email}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">Phone Number</h1>
        <input
          type="text"
          className="input-bordered input-success input w-full"
          name="phone"
          value={resumeData.phone}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">
          Total years Experience
        </h1>
        <input
          type="text"
          className="input-bordered input-success input w-full"
          name="total_exp"
          value={resumeData.total_exp}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">Resume</h1>
        <Upload />
        <div>
          <button className="btn-primary btn mt-[1%]" onClick={updateProfile}>
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifiedForm;
