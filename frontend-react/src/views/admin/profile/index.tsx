import Card from "components/card";
import { AiOutlineStar } from "react-icons/ai";
import { BsEmojiNeutral } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import { BiSad } from "react-icons/bi";
import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";

const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-10">
        <div className="col-span-6 lg:!mb-0">
          <Banner />
        </div>
        <div className="z-0 col-span-4 lg:!mb-0">
          {/* Add review*/}
          <Card className="grid  grid-cols-1 gap-9 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none ">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">
              Add review
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full "
            />
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">
              Add Flag
            </h1>
            <div className="flex items-center justify-center gap-4">
              <button className="btn-error btn ">
                <BiSad size="30" />
              </button>
              <button className="btn-warning btn ">
                <BsEmojiNeutral size="30" />
              </button>
              <button className="btn-accent btn ">
                <VscSmiley size="30" />
              </button>
              <button className="btn-primary btn-success btn">
                <AiOutlineStar size="30" />
              </button>
            </div>
            <div>
              <button className="btn-primary btn-block btn">Submit</button>
            </div>
          </Card>
        </div>
      </div>
      {/* all project & ... */}
      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-10">
        <div className="col-span-5 lg:col-span-5 lg:mb-0 ">
          <Project />
        </div>
        <div className="col-span-5 lg:col-span-5 lg:mb-0 ">
          <General />
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
