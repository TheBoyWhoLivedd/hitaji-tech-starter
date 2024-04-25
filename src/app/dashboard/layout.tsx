import { Navbar } from "~/components/layouts/Navbar";
import Sidebar from "~/components/layouts/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 h-[80px] w-full bg-background md:pl-56">
        <Navbar />
      </div>
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col bg-background md:block">
        <Sidebar />
      </div>
      <main className="mt-[80px] p-3 dark:text-slate-300  md:ml-56">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
