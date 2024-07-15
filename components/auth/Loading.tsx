import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={100}
        height={100}
        className="animate-pulse duration-700"
      />
    </div>
  );
}
