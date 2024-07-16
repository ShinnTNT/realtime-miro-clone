"use client";

import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex items-center w-full bg-red-100">
      Navbar
      <UserButton />
    </div>
  );
}
