import React, { useEffect, useRef, useState } from 'react'
import { Camera } from "react-camera-pro";
import { VscVerified } from "react-icons/vsc";
import { AiOutlineCamera } from "react-icons/ai";
import General from './General';
import {IoMdReverseCamera} from "react-icons/io"
type Props = {}

function CameraComponent({ }: Props) {
  const camera = useRef(null);
  const [image, setImage] = useState(null);


  useEffect(() => {
    console.log({ image });
  }, [image]);
  return (
    <div className='flex w-full flex-col gap-5'>
      <h1 className="text-[#000000] dark:text-white text-bold text-3xl tracking-[1.5px] ">
        Verify your profile and boost your scores 🚀
      </h1>
      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-2">
        <div className="flex flex-col gap-y-2">
          {!image ? <div className='z-1'><Camera ref={camera} aspectRatio={16 / 9} /></div>: <div className='z-1'><img src={image} alt='Taken photo' /></div>}
          <div className="flex items-center justify-center gap-2 mt-[-6%]  ">
            {!image && <button className='btn btn-primary z-100 absolute' onClick={() => setImage(camera.current.takePhoto())}><AiOutlineCamera size={40} /></button>}
            {image && <button className='btn btn-primary z-100 absolute' onClick={() => setImage(null)}><IoMdReverseCamera size={40}/></button>}
            {image && <VscVerified className='text-green-500 text-4xl' />}
          </div>
        </div>
        <div>
          <General />
        </div>
        <div>
        </div>
      </div>
      <div className='flex flex-col gap-y-4 mt-[2%]'>
        <span className="text-xl text-black">Add Pan Card</span>
        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
        <span className="text-xl text-black">Add Finger print</span>
        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
        <div><button className='btn btn-primary'>Verify Profile</button></div>
      </div>
    </div>
  )
}

export default CameraComponent