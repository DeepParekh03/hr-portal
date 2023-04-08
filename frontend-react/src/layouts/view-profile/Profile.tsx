import Card from "components/card";
import { AiOutlineStar } from "react-icons/ai";
import { BsEmojiNeutral } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import { BiSad } from "react-icons/bi";
import Banner from "./Banner";
import Project from "views/admin/profile/components/Project";
import General from "views/admin/profile/components/General";

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
            <div className="flex flex-col items-center justify-center">
              <button className="btn-primary btn-success btn w-full">
                Select Employee
              </button>
              OR
              <button className="btn-primary btn-error btn w-full">
                Reject Employee
              </button>
            </div>
          </Card>
        </div>
      </div>
      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-10">
        <div className="col-span-5 lg:col-span-5 lg:mb-0 ">
          <Project />
        </div>
        <div className="col-span-5 lg:col-span-5 lg:mb-0 ">
          <General />
        </div>
      </div>
      {/* all project & ... */}
    </div>
  );
};

export default ProfileOverview;
