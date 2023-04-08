import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import Banner from "./components/Banner";
// import { Card, CardWrapper } from "react-swipeable-cards";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
type Props = {};

const ListEmployee = (props: Props) => {
  const [applicants, setApplicants] = React.useState<any>([]);

  const getAllApplicants = () => {
    const data = {
      jobid: "60f1b1b0e4b0a8a2b4b1b1b1",
    };
    fetch("http://localhost:9000/getJobByID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getAllApplicants();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col gap-8">
      <div className="mt-3 grid h-full grid-cols-1 gap-5 lg:!grid-cols-10">
        <div className="col-span-10 lg:!mb-0">
          <Banner />
          <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
            <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
              List of Applicants
            </h4>
          </div>
          <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
            {applicants.length > 0 &&
              applicants.map((e: any) => {
                return (
                  <EmployeeCard
                    id={e.id}
                    title={e.name}
                    author={e.aadharID}
                    image={e.img}
                  />
                );
              })}
            <EmployeeCard
              id="1"
              title="Abstract Colors"
              author="Esthera Jackson"
              price="0.91"
              image={NFt3}
            />
            <EmployeeCard
              id="1"
              title="ETH AI Brain"
              author="Nick Wilson"
              price="0.7"
              image={NFt2}
            />
            <EmployeeCard
              id="1"
              title="Mesh Gradients"
              author="Will Smith"
              price="2.91"
              image={NFt4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmployee;
