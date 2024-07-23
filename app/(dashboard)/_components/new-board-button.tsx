"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api.mutation";
import { cn } from "@/lib/utils";

import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export default function NewBoardButton({
  orgId,
  disabled,
}: NewBoardButtonProps) {
  const { mutate, pending } = useApiMutation(api.board.create);

  const router = useRouter();

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (disabled || pending) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <PlusIcon className="w-7 h-7 text-white stroke-1" />
      <p className="text-xs text-white font-light">New Board</p>
    </button>
  );
}
