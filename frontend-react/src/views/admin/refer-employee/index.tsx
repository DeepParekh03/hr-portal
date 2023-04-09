import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Banner from "./components/Banner";
type Props = {};

const ReferEmployee = (props: Props) => {
  const [aadharFound, setAadharFound] = React.useState(false);
  const navigate = useNavigate();
  const submitReview = () => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Review submitted successfully",
    }).then(() => {
      navigate("/admin/default");
    });
  };
  return (
    <div className="mt-[1%]">
      <Banner />
      <h1 className=" text-bold mt-[1%] flex items-center  text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
        Refer a employee by giving a positive review
      </h1>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-bold mt-[2%] text-xl tracking-[1.5px]">
          Aadhar Card
        </h1>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input-success input w-full"
        />
        {!aadharFound && (
          <button
            className="btn-primary btn"
            onClick={() => {
              setAadharFound(!aadharFound);
            }}
          >
            Find aadhar
          </button>
        )}
        {aadharFound && (
          <>
            <h1 className="text-bold text-xl tracking-[1.5px] ">Review</h1>
            <textarea className="textarea" placeholder="Bio"></textarea>
            <button className="btn-primary btn" onClick={submitReview}>
              Submit review
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ReferEmployee;
