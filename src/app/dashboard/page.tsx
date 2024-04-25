import GroupChart4 from "~/components/group-chart";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 xl:col-span-8">
        <div className="rounded-md bg-white p-4 dark:border-slate-700 dark:bg-background">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            <GroupChart4 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
