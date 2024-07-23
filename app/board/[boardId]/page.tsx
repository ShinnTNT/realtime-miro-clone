import Room from "@/components/room";
import Canvas from "./_components/canvas";
import Loading from "./_components/loading";

interface PageProps {
  params: {
    boardId: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <Room fallback={<Loading />} roomId={params.boardId}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
}
