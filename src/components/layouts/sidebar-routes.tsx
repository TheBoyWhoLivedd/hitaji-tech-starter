"use client";
import React from "react";
import {
  ClipboardIcon,
  CircleIcon,
  PlusCircledIcon,
  FileIcon,
  PersonIcon,
  CalendarIcon,
} from "@radix-ui/react-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
// import { useSession } from "next-auth/react";
// import { CustomSession } from "@/app/api/auth/[...nextauth]/options";

export const SidebarRoutes = () => {
  // const { data: session } = useSession() as { data: CustomSession | null };
  const isAdmin = true;
  // const isAdmin = session?.user?.isAdmin;
  // const userRole = session?.user?.role;
  const userRole = "Supervisor";
  const path = usePathname();
  //console.log("Current Path: ", path);

  type RouteType = {
    title: string;
    href?: string;
    icon: React.JSX.Element;
    label: string;
    isTitle: boolean;
    children?: {
      title: string;
      label: string;
      href: string;
      parentKey: string;
      icon: React.JSX.Element;
    }[];
  };

  const adminRoutes: RouteType[] = [
    {
      title: "Division",
      label: "Division",
      isTitle: false,
      icon: <FileIcon />,
      children: [
        {
          title: "New Division",
          label: "New Division",
          href: "/dashboard/departments/new",
          parentKey: "Department",
          icon: <PlusCircledIcon />,
        },
        {
          title: "Division List",
          label: "Division List",
          href: "/dashboard/departments",
          parentKey: "Department",
          icon: <CircleIcon />,
        },
      ],
    },
    {
      title: "LeaveType",
      label: "Leave Type",
      isTitle: false,
      icon: <ClipboardIcon />,
      children: [
        {
          title: "Leave Type List",
          label: "Leave Type List",
          href: "/dashboard/leave-type",
          parentKey: "LeaveType",
          icon: <CircleIcon />,
        },
        {
          title: "New Leave Type",
          label: "New Leave Type",
          href: "/dashboard/leave-type/new",
          parentKey: "LeaveType",
          icon: <PlusCircledIcon />,
        },
      ],
    },
    {
      title: "Employee",
      label: "Employee",
      isTitle: false,
      icon: <PersonIcon />,
      children: [
        {
          title: "NewEmployee",
          label: "New Employee",
          href: "/dashboard/employees/new",
          parentKey: "Employee",
          icon: <PersonIcon />,
        },
        {
          title: "Employee List",
          label: "Employee List",
          href: "/dashboard/employees",
          parentKey: "Employee",
          icon: <CircleIcon />,
        },
      ],
    },
  ];

  const commonRoutes: RouteType[] = [
    {
      title: "Dashboard",
      label: "Dashboard",
      href: "/dashboard",
      isTitle: false,
      icon: <ClipboardIcon />,
    },
    {
      title: "Leave Application",
      label: "Leave Application",
      isTitle: false,
      icon: <ClipboardIcon />,
      children: [
        {
          title: "New Leave",
          label: "New Leave",
          href: "/dashboard/leave/new",
          parentKey: "Leave",
          icon: <PlusCircledIcon />,
        },
        {
          title: "Leave History",
          label: "Leave History",
          href: "/dashboard/leave",
          parentKey: "Leave",
          icon: <CircleIcon />,
        },
      ],
    },
    {
      title: "Leave Planner",
      label: "Leave Planner",
      href: "/dashboard/calendar",
      isTitle: false,
      icon: <CalendarIcon />,
    },
    ...(userRole === "Supervisor"
      ? [
          {
            title: "Leave Approval",
            label: "Leave Approval",
            href: "/dashboard/leave-approval",
            isTitle: false,
            icon: <ClipboardIcon />,
          },
        ]
      : []),
  ];

  const routes = isAdmin ? [...commonRoutes, ...adminRoutes] : commonRoutes;

  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList className="flex flex-col gap-2">
        {routes.map((route) => {
          const isActive = path === route.href;
          // console.log("Current Path: ", path);
          // console.log("Route: ", route.href);
          // console.log("Is Active: ", isActive);
          if (route.children && route.children.length > 0) {
            return (
              <Accordion
                className="w-full"
                type="single"
                collapsible
                key={route.title}
              >
                <AccordionItem value={route.title}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-1">
                      {route.icon}
                      {route.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {route.children.map((child) => {
                      const isSubActive = path === child.href;
                      return (
                        <Link
                          key={child.title}
                          href={child.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuItem className="w-full">
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex justify-start gap-2 w-full cursor-pointer text-opacity-50",
                                isSubActive && "text-opacity-100 bg-accent/50"
                              )}
                            >
                              {child.icon}
                              {child.title}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        </Link>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          } else {
            return (
              <Link
                key={route.title}
                href={route.href!}
                legacyBehavior
                passHref
                className="w-full"
              >
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "flex justify-start gap-2 w-full cursor-pointer text-opacity-50",
                      isActive && "text-opacity-100 bg-accent/50"
                    )}
                  >
                    {route.icon}
                    {route.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </Link>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
