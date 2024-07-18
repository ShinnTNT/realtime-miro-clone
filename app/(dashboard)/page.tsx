"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import BoardList from "./_components/board-list";

interface DashboardProps {
  searchParams: {
    search?: string;
    favourites?: string;
  };
}

export default function Dashboard({ searchParams }: DashboardProps) {
  const { organization } = useOrganization();

  console.log(JSON.stringify(searchParams));

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
}
