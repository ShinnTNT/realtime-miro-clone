import Image from "next/image";

export default function EmptySearch() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/not-found.jpg" alt="empty" width={250} height={250} />
      <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
}
