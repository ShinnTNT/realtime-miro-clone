"use client";

import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";

import { formatDistanceToNow } from "date-fns";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api.mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavourite: boolean;
}

export default function BoardCard({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  isFavourite,
  orgId,
}: BoardCardProps) {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const { mutate: favourite, pending: favouritePending } = useApiMutation(
    api.board.favourite
  );

  const { mutate: unfavourite, pending: unfavouritePending } = useApiMutation(
    api.board.unfavourite
  );

  const toggleFavourite = () => {
    if (isFavourite) {
      unfavourite({ id }).catch(() => toast.error("Failed to unfavourite"));
    } else {
      favourite({ id, orgId }).catch(() => toast.error("Failed to favourite"));
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} fill alt={title} className="object-fill" />
          <Actions id={id} title={title} side="right">
            <button className="absolute z-[1] top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
          <Overlay />
        </div>

        <Footer
          isFavourite={isFavourite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavourite}
          disabled={favouritePending || unfavouritePending}
        />
      </div>
    </Link>
  );
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
