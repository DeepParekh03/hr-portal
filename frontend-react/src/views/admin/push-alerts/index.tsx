import React from "react";
import { AiOutlineAlert } from "react-icons/ai";
import Banner from "./components/Banner";
import Notif from "../../../assets/notif.png";
import Swal from "sweetalert2";
import { messaging } from "../../../utils/firebase-config";
import { getMessaging, getToken } from "firebase/messaging";
type Props = {};

const PushAlerts = (props: Props) => {
  const [msgData, setMsgData] = React.useState({
    title: "",
    text: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMsgData({ ...msgData, [name]: value });
  };

  const pushNotification = () => {
    console.log(messaging);
    const { title, text } = msgData;
    if (title && text) {
      Swal.fire({
        icon: "success",
        title: `${msgData.title}`,
        text: "Notifations should be pushed in some time",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `title or text missing`,
        text: "retry",
      });
    }

    // const { title, text } = msgData;
    // if (title && text) {
    // } else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Please fill all the fields",
    //   });
    // }
  };

  return (
    <div className="flex min-h-screen w-full flex-col gap-8">
      <div className="mt-3 grid h-full grid-cols-1 gap-5 lg:!grid-cols-10">
        <div className="col-span-10 lg:!mb-0">
          <Banner />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h1 className="text-bold text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
              Select Cohort to send alerts
            </h1>
            <AiOutlineAlert
              size={35}
              className="text-bold text-3xl tracking-[1.5px] text-red-500 dark:text-white"
            />
          </div>
          <select className="select w-full max-w-xs">
            <option>Chefs</option>
            <option>Waiters</option>
            <option>Managers</option>
            <option>Security Guard</option>
          </select>
          <h1 className="text-bold text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
            Message title
          </h1>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input w-full"
            name="title"
            value={msgData.title}
            onChange={handleInputChange}
          />
          <h1 className="text-bold text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
            Message text
          </h1>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input w-full"
            name="text"
            value={msgData.text}
            onChange={handleInputChange}
          />
          <button className="btn-primary btn" onClick={pushNotification}>
            Push Notifications
          </button>
        </div>
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
            <img src={Notif} alt="" className="mt-[8%]" />
            <div className="phone-1 artboard artboard-demo">
              This is how the notification will look like
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushAlerts;
