import { UserContext } from "providers/UserContext";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type Props = {};

const JobPostings = (props: Props) => {
  const navigate = useNavigate();

  const handleSelectChange = (event: any) => {
    setJobData({ ...jobData, jobType: event.target.value });
  };
  const { jobData, setJobData, handleJobChange } = useContext(UserContext);
  const addJob = () => {
    console.log(jobData);

    fetch("https://codeshahstrahojayega-production.up.railway.app/addJob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Job Added",
          text: "Job has been added successfully!",
        }).then(() => {
          navigate("/admin/default");
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Job adding error",
          text: "Try again later",
        });
      });
  };
  return (
    <div className="min-h-screen">
      <div className="mt-[1%] flex flex-col gap-y-2">
        <h1 className="text-bold text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
          New Job Posting
        </h1>
        <h1 className="text-bold text-xl tracking-[1.5px] ">Position</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input-success input w-full"
          onChange={handleJobChange}
          name="jobTitle"
          value={jobData.jobTitle}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">Description</h1>
        <textarea
          placeholder="Type here"
          className="textarea-bordered textarea"
          onChange={handleJobChange}
          name="jobDescription"
          value={jobData.jobDescription}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">Job Salary</h1>
        <input
          type="text"
          className="input-bordered input-success input w-full"
          onChange={handleJobChange}
          name="jobSalary"
          value={jobData.jobSalary}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">
          Min Years Experience
        </h1>
        <input
          type="text"
          className="input-bordered input-success input w-full"
          onChange={handleJobChange}
          name="jobExperience"
          value={jobData.jobExperience}
        />
        <h1 className="text-bold text-xl tracking-[1.5px] ">Job Type</h1>
        <select
          className="select-bordered select w-full max-w-xs"
          onChange={handleSelectChange}
          value={jobData.jobType}
        >
          <option>Freelancing</option>
          <option>Full Time</option>
        </select>
        <div>
          <button className="btn-primary btn mt-[1%]" onClick={addJob}>
            Submit Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPostings;
