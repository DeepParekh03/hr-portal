import React from "react";
import { AiOutlineAlert } from "react-icons/ai";
import Banner from "./components/Banner";
type Props = {};

const pushAlerts = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-5">
      <div className="mt-3 grid h-full grid-cols-1 gap-5 lg:!grid-cols-10">
        <div className="col-span-10 lg:!mb-0">
          <Banner />
        </div>
      </div>
      <div className="flex items-center gap-2">
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
        Enter message you want to send them
      </h1>
      <input
        type="text"
        placeholder="Type here"
        className="input-bordered input w-full"
      />
      <button className="btn-primary btn">Push Notifications</button>
    </div>
  );
};

export default pushAlerts;
