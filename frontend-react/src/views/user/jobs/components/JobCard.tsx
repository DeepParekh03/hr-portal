import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Card from "components/card";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const JobCard = (props: {
  image: any;
  title: any;
  author: any;
  download?: string;
  price: string | number;
  extra?: string;
}) => {
  const navigate = useNavigate();
  const { title, author, image, extra } = props;
  const [heart, setHeart] = useState(true);

  const submitApplication = () => {
    Swal.fire({
      title: "Success!",
      text: "Application submitted successfully",
      icon: "success",
      confirmButtonText: "Cool",
    }).then(() => navigate("/user/default"));
  };

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={() => setHeart(!heart)}
            className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? (
                <IoHeartOutline />
              ) : (
                <IoHeart className="text-brand-500" />
              )}
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              By {author}{" "}
            </p>
          </div>
        </div>
        <div className="flex  md:flex-col md:items-end lg:flex-row lg:justify-between xl:flex-col 2xl:items-end 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <button
            className="linear float-right rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
            onClick={submitApplication}
          >
            Send application
          </button>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
