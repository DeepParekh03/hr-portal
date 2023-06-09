import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";

const ProfileUser = () => {
  return (
    <div className="flex w-full flex-col gap-5">
     <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-10">
        <div className="col-span-6 lg:!mb-0">
          <Banner />
        </div>
        <div className="col-span-4 lg:!mb-0">
          <Upload />
        </div>  
      </div>
      {/* all project & ... */}
      <div className="grid h-full grid-cols-2 gap-5 lg:!grid-cols-12">
      <div className="col-span-7 lg:col-span-7 lg:mb-0 ">
          <General />
        </div>
        <div className="col-span-5 lg:col-span-5 lg:mb-0">
          <Project />
        </div>
        
        {/* <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div> */}
      </div>
    </div>
  );
};

export default ProfileUser;
