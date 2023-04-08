import Card from "components/card";
const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Instructions
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          Follow to the instructions to complete your profile and get better advantages over your competitors.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Aadhar card verification</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Keep the aadhar card on your left and click a photo of you with it.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Pan card upload</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            We verify your pan card and make sure its not a fake one.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Finger print verification</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Scan your finger print and we store it against your profile
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
