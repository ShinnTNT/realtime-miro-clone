import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-full h-full bg-red-200">
      <Button>TEst</Button>

      <UserButton />
    </div>
  );
}
