import React, { useContext, useEffect, useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import { VscVerified } from "react-icons/vsc";
import { AiOutlineCamera, AiOutlineCheck } from "react-icons/ai";
import General from "./General";
import { IoMdReverseCamera } from "react-icons/io";
import Swal from "sweetalert2";
import { TiTickOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { UserContext } from "providers/UserContext";
import { useNavigate } from "react-router-dom";
type Props = {};

function CameraComponent({}: Props) {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [isProfileFetched, setIsProfileFetched] = useState(false);
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    console.log({ image });
  }, [image]);

  const verifyProfile = () => {
    if (image) {
      fetch("http://localhost:5000/walkin", {
        method: "POST",
        body: JSON.stringify({}),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          Swal.fire({
            icon: "success",
            title: "profile matched",
            text: "Success!",
          }).then(() => {
            setIsProfileFetched(!isProfileFetched);
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please take a photo!",
      });
    }
  };

  const addEmployee = () => {
    fetch(
      "https://codeshahstrahojayega-production.up.railway.app/addEmployee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "12345da22434",
        }),
      }
    )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Employee Added",
          text: "Employee has been added successfully!",
        }).then(() => {
          navigate("/admin/default");
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <h1 className="text-bold text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
        Add walk in employees and fetch data based on face recognition 🚀
      </h1>
      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-2">
        <div className="flex flex-col gap-y-2">
          {!image ? (
            <div className="z-1">
              <Camera ref={camera} aspectRatio={16 / 9} errorMessages={{}} />
            </div>
          ) : (
            <div className="z-1">
              <img src={image} alt="Taken photo" />
            </div>
          )}
          <div className="mt-[-6%] flex items-center justify-center gap-2  ">
            {!image && (
              <button
                className="z-100 btn-primary btn absolute"
                onClick={() => setImage(camera.current.takePhoto())}
              >
                <AiOutlineCamera size={40} />
              </button>
            )}
            {image && (
              <button
                className="z-100 btn-primary btn absolute"
                onClick={() => setImage(null)}
              >
                <IoMdReverseCamera size={40} />
              </button>
            )}
            {image && <VscVerified className="text-4xl text-green-500" />}
          </div>
        </div>
        <div>
          {isProfileFetched ? (
            <>
              <General />
            </>
          ) : (
            <>
              <h1 className="text-bold ml-[1%]  text-xl tracking-[1.5px] text-[#000000] dark:text-white ">
                Profile not found! Create a new profile
              </h1>
              <button className="btn-primary btn">Register Employee</button>
            </>
          )}
        </div>
      </div>
      <div className="mt-[2%] flex flex-col gap-y-4">
        <div>
          {!isProfileFetched ? (
            <button className="btn-primary btn" onClick={verifyProfile}>
              Fetch Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button className="btn-primary btn-error btn">
                <RxCross2 size={30} />
              </button>
              <button
                className="btn-primary btn-success btn"
                onClick={addEmployee}
              >
                <AiOutlineCheck size={30} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CameraComponent;
