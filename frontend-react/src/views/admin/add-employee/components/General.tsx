import Card from "components/card";
const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mb-8 mt-2 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Profile Information
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          Data fetched from Face recognition can be used as a background check
          before selecting the employee.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Name and Gender</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Ishaan Shah (M)
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Verified Profile</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Profile is Verified and safe
          </p>
        </div>
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Criminal Record Found</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            No criminal record was found for the profile
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
