import React from "react";
import CameraComponent from "./components/CameraComponent";

type Props = {};

const addEmployee = (props: Props) => {
  return (
    <div className="mt-[2%] min-h-screen">
      <CameraComponent />
    </div>
  );
};

export default addEmployee;
