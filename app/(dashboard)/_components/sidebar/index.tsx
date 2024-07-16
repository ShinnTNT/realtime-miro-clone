"use client";

import List from "./list";
import NewButton from "./new-button";

export default function Sidebar() {
  return (
    <aside className="fixed z-[1] left-0 w-[60px] h-full flex flex-col gap-y-4 p-3 bg-blue-950">
      <List />
      <NewButton />
    </aside>
  );
}
