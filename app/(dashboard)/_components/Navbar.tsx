"use client";

import SearchInput from "@/components/search-input";
import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import InviteButton from "./invite-button";

export default function Navbar() {
  const { organization } = useOrganization();

  return (
    <div className="flex items-center gap-x-4 p-5 w-full">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
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
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
}
