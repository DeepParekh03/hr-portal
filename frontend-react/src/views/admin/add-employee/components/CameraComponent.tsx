import React, { useEffect, useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import { VscVerified } from "react-icons/vsc";
import { AiOutlineCamera } from "react-icons/ai";
import General from "./General";
import { IoMdReverseCamera } from "react-icons/io";
type Props = {};

function CameraComponent({}: Props) {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

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
        />
        <span className="text-black text-xl">Add Finger print</span>
        <input
          type="file"
          className="file-input-bordered file-input-primary file-input w-full max-w-xs"
        />
        <div>
          <button className="btn-primary btn">Verify Profile</button>
        </div>
      </div>
    </div>
  );
}

export default CameraComponent;
