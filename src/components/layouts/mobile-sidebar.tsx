import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Sidebar from "./Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="z-10 pr-4 transition hover:opacity-75 md:hidden">
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className=" w-[200px] p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
