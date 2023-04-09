import Card from "components/card";
import React from "react";

type Props = {};

const VerifyModels = (props: Props) => {
  const [result, setData] = React.useState("");

  const handlePanSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", event.target.elements.image.files[0]);
    const response = await fetch("http://127.0.0.1:5000/fakepan", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setData(data.result);
  };
  const handleAadharSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", event.target.elements.image.files[0]);
    const response = await fetch("http://127.0.0.1:5000/aadharocr", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setData(data.result);
  };

  const handleFaceSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", event.target.elements.image.files[0]);
    const response = await fetch(
      "http://127.0.0.1:5000/aadharfaceverification",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setData(data.result);
  };
  const handleVeriSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", event.target.elements.image.files[0]);
    const response = await fetch("http://127.0.0.1:5000/face", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setData(data.result);
  };
  const handleCriminalSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", event.target.elements.image.files[0]);
    const response = await fetch("http://127.0.0.1:5000/criminal", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setData(data.result);
  };
  const handleFingerSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", event.target.elements.image.files[0]);
    const response = await fetch("http://127.0.0.1:5000/fingerprint", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setData(data.result);
  };
  return (
    <div className="mt-3 flex  items-center justify-center gap-5 ">
      <div className="flex gap-6">
        <div className="flex flex-col gap-4">
          <Card className=" grid h-60 w-80 grid-cols-1 gap-9 rounded-[20px] bg-white bg-clip-border p-3  font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none ">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">
              Fake Pan card
            </h1>
            <form
              onSubmit={handlePanSubmit}
              encType="multipart/form-data"
              className="login"
            >
              <div className="mb-3">
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="file-input w-full max-w-xs"
                />
                <button type="submit" className="btn-primary btn mt-[12%]">
                  Submit
                </button>
              </div>
            </form>
          </Card>

          <Card className="grid h-60 w-80 grid-cols-1 gap-9 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none ">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">
              Aadhar OCR
            </h1>
            <form
              onSubmit={handleAadharSubmit}
              encType="multipart/form-data"
              className="login"
            >
              <div className="mb-3">
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="file-input w-full max-w-xs"
                />
                <button type="submit" className="btn-primary btn mt-[12%]">
                  Submit
                </button>
              </div>
            </form>
          </Card>

          <Card className="grid h-60 w-80 grid-cols-1 gap-9 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none ">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">
              Aadhar Face Verification
            </h1>
            <form
              onSubmit={handleFaceSubmit}
              encType="multipart/form-data"
              className="login"
            >
              <div className="mb-3">
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="file-input w-full max-w-xs"
                />
                <button type="submit" className="btn-primary btn mt-[12%]">
                  Submit
                </button>
              </div>
            </form>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card className=" grid h-60 w-80 grid-cols-1 gap-9 rounded-[20px] bg-white bg-clip-border p-3  font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none ">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">
              Face Verification
            </h1>
            <form
              onSubmit={handleVeriSubmit}
              encType="multipart/form-data"
              className="login"
            >
              <div className="mb-3">
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="file-input w-full max-w-xs"
                />
                <button type="submit" className="btn-primary btn mt-[12%]">
                  Submit
                </button>
              </div>
            </form>
          </Card>

          <Card className="grid h-60 w-80 grid-cols-1 gap-9 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none ">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">
              Criminal background check
            </h1>
            <form
              onSubmit={handleCriminalSubmit}
              encType="multipart/form-data"
              className="login"
            >
              <div className="mb-3">
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="file-input w-full max-w-xs"
                />
                <button type="submit" className="btn-primary btn mt-[12%]">
                  Submit
                </button>
              </div>
            </form>
          </Card>

          <Card className="grid h-60 w-80 grid-cols-1 gap-9 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none ">
            <h1 className="text-xl font-bold text-navy-700 dark:text-white">
              Finger Print
            </h1>
            <form
              onSubmit={handleFingerSubmit}
              encType="multipart/form-data"
              className="login"
            >
              <div className="mb-3">
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="file-input w-full max-w-xs"
                />
                <button type="submit" className="btn-primary btn mt-[12%]">
                  Submit
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
      <div>
        {result && (
          <div>
            <label>{result}</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyModels;
