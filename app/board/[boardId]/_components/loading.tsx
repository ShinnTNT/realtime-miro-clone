import { Loader } from "lucide-react";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

export default function Loading() {
  return (
    <main className="w-full h-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeletion />
    </main>
  );
}
