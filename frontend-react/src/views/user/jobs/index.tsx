import React from "react";
import Banner from "./components/Banner";
import JobCard from "./components/JobCard";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";

type Props = {};

const FindJobs = (props: Props) => {
  const [freelance, setFreelance] = React.useState(true);
  const [fullTime, setFullTime] = React.useState(false);

  const setCategory = () => {
    setFreelance(!freelance);
    setFullTime(!fullTime);
  };

  const [jobs, setJobs] = React.useState({});

  const getAllJobs = async () => {
    try {
      const response = await fetch(
        "https://d38f-103-208-226-234.ngrok-free.app/getAllJobs"
      );
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="mt-3 grid h-full min-h-screen grid-cols-1 gap-5 ">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <Banner />
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Jobs Categories
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <button
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                onClick={setCategory}
              >
                Freelance
              </button>
            </li>
            <li>
              <button
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                onClick={setCategory}
              >
                Full time
              </button>
            </li>
          </ul>
        </div>
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {freelance && (
            <>
              <JobCard
                title="Abstract Colors"
                author="Esthera Jackson"
                price="0.91"
                image={NFt3}
              />
              <JobCard
                title="ETH AI Brain"
                author="Nick Wilson"
                price="0.7"
                image={NFt2}
              />
              <JobCard
                title="Mesh Gradients"
                author="Will Smith"
                price="2.91"
                image={NFt4}
              />
            </>
          )}
          {fullTime && (
            <>
              <JobCard
                title="Abstract Colors"
                author="Esthera Jackson"
                price="0.91"
                image={NFt3}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
