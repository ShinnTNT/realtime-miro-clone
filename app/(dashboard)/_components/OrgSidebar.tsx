"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function OrgSidebar() {
  const searchParams = useSearchParams();
  const favourites = searchParams.get("favourites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="logo" height={60} width={60} />
          <span className={cn("font-semibold text-2xl", font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              width: "100%",
              padding: "6px",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="space-y-1 w-full">
        <Button
          asChild
          size="lg"
          variant={favourites ? "ghost" : "secondary"}
          className="w-full px-2 justify-start font-normal"
        >
          <Link href="/">
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Team Boards
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant={favourites ? "secondary" : "ghost"}
          className="w-full px-2 justify-start font-normal"
        >
          <Link
            href={{
              pathname: "/",
              query: {
                favourites: true,
              },
            }}
          >
            <Star className="w-4 h-4 mr-2" />
            Favourite Boards
          </Link>
        </Button>
      </div>
    </div>
  );
}
