import { MdFileUpload } from "react-icons/md";
import Card from "components/card";
import { useState } from "react";
import { app, storage } from "../../../../utils/firebase-config";
import { ref, uploadBytes } from "firebase/storage";
const Upload = () => {
  const [resume, setResume] = useState(null);

  const handleUploadClick = () => {
    // Trigger a click event on the file input element
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };
  const handleUpload = (resume, setResume) => {
    if (!storage) {
      console.error("Firebase Storage is not initialized");
      return;
    }
    console.log("uploading resume", resume.file);
    const pdfRef = ref(storage, `pdfs/${resume.name}`);
    uploadBytes(pdfRef, resume.file)
      .then((snapshot) => {
        console.log("File uploaded successfully");
        setResume(null);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };
  return (
    <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
        <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
          <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
          <p
            className="text-xl font-bold text-brand-500 dark:text-white"
            onClick={handleUploadClick}
          >
            Upload Files
          </p>
          <input
            id="fileInput"
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            className="hidden"
          />

          <p className="mt-2 text-sm font-medium text-gray-600">
            PDF, JPG files are allowed
          </p>
        </button>
      </div>

      <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pb-4 pl-3 dark:!bg-navy-800">
        <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
          Complete Your Profile
        </h5>
        <p className="leading-1 mt-2 text-base font-normal text-gray-600">
          Keep your profile uploaded as we extract information from your resume
          to create your profile.
        </p>
        <button
          className="btn-primary btn mt-[4%]"
          onClick={() => handleUpload(resume, setResume)}
        >
          Upload
        </button>
      </div>
    </Card>
  );
};

export default Upload;
