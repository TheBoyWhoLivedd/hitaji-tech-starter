"use client";

import * as React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ExitIcon, GearIcon } from "@radix-ui/react-icons";

export function UserMenu() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className=" h-13 flex items-center space-x-2 "
        >
          <Avatar className="shrink-0">
            <AvatarImage
              src={session?.user?.image ?? ""}
              alt={`${session?.user?.name}'s avatar`}
            />
            <AvatarFallback delayMs={600}>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-start">
            <span className="font-medium">{session?.user?.name}</span>
            {/* <span className="font-semibold">{session?.user?.role}</span> */}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]" align="center">
        <DropdownMenuItem className="px-4 py-2">
          <Link className="flex items-center gap-2" href="/dashboard/settings">
            <GearIcon />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 px-4 py-2"
          onClick={handleSignOut}
        >
          <ExitIcon />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
