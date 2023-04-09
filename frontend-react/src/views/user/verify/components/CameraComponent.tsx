import React, { useContext, useEffect, useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import { VscVerified } from "react-icons/vsc";
import { AiOutlineCamera } from "react-icons/ai";
import General from "./General";
import { IoMdReverseCamera } from "react-icons/io";
import Swal from "sweetalert2";
import { UserContext } from "providers/UserContext";
type Props = {};

function CameraComponent({}: Props) {
  const { aadharData, setAadharData, userData, setUserData } =
    useContext(UserContext);
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [pan, setPan] = useState(null);
  const [aadhar, setAadhar] = useState(null);
  const [fingerPrint, setFingerPrint] = useState(null);
  const [imageVerification, setImageVerification] = useState(false);
  const [panVerification, setPanVerification] = useState(false);
  const [aadharVerification, setAadharVerification] = useState(false);

  const handlePanFileChange = (event: any) => {
    setPan(event.target.files[0]);
  };

  const handleFingerprintFileChange = (event: any) => {
    setFingerPrint(event.target.files[0]);
  };

  const handleAadharFileChange = (event: any) => {
    setAadhar(event.target.files[0]);
  };

  const verifyImage = () => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      fetch("http://localhost:5000/aadharverification", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data === 0) {
            Swal.fire({
              title: "Error!",
              text: "Image Verification Failed",
              icon: "error",
              confirmButtonText: "Cool",
            });
          } else {
            Swal.fire({
              title: "Success!",
              text: "verification successful",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: "Image Verification Failed",
            icon: "error",
            confirmButtonText: "Cool",
          });
        });
      setImageVerification(!imageVerification);
    }
  };
  const verifyAadhar = () => {
    if (aadhar) {
      const formData = new FormData();
      formData.append("aadhar", aadhar);
      fetch("http://localhost:5000/fakeaadhar", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setAadharData({ ...aadharData, data });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: "Aadhar ocr failed",
            icon: "error",
            confirmButtonText: "Cool",
          });
        });
      setAadharVerification(!aadharVerification);
    }
  };

  const verifyFingerPrint = () => {
    if (fingerPrint) {
    }
  };

  const verifyPan = () => {
    if (pan) {
      const formData = new FormData();
      formData.append("pan", pan);
      fetch("http://localhost:5000/fakepan", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data === 0) {
            Swal.fire({
              title: "Error!",
              text: "verification failed",
              icon: "error",
              confirmButtonText: "Cool",
            });
          } else {
            Swal.fire({
              title: "Success!",
              text: "verification successful",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: "verification failed",
            icon: "error",
            confirmButtonText: "Cool",
          });
        });
      setPanVerification(!panVerification);
    }
  };

  const verifyProfile = () => {
    if (imageVerification && panVerification && aadharVerification) {
      setUserData({ ...userData, isVerified: true });
    } else {
      Swal.fire({
        title: "Incomplete Verification !",
        text: "verification not complete try again sometime later",
        icon: "warning",
        confirmButtonText: "Cool",
      }).then(() => {
        setUserData({ ...userData, isVerified: true });
      });
    }
  };
  useEffect(() => {
    console.log({ image });
  }, [image]);
  return (
    <div className="flex w-full flex-col gap-5">
      <h1 className="text-bold text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
        Verify your profile and boost your scores 🚀
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
          <General />
        </div>
        <div></div>
      </div>
      <div className="mt-[2%] flex flex-col gap-y-4">
        <span className="text-black text-xl">Add Pan Card</span>
        <input
          type="file"
          className="file-input-bordered file-input-primary file-input w-full max-w-xs"
          onChange={handlePanFileChange}
        />
        <span className="text-black text-xl">Add Finger print</span>
        <input
          type="file"
          className="file-input-bordered file-input-primary file-input w-full max-w-xs"
          onChange={handleFingerprintFileChange}
        />
        <span className="text-black text-xl">Add Aadhar for OCR</span>
        <input
          type="file"
          className="file-input-bordered file-input-primary file-input w-full max-w-xs"
          onChange={handleAadharFileChange}
        />
        <div className="flex gap-4">
          <button className="btn-primary btn" onClick={verifyImage}>
            Verify Photo
          </button>
          <button className="btn-primary btn" onClick={verifyPan}>
            Verify Pan
          </button>
          <button className="btn-primary btn" onClick={verifyFingerPrint}>
            Verify Fingerprint
          </button>
          <button className="btn-primary btn" onClick={verifyProfile}>
            Verify Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default CameraComponent;
