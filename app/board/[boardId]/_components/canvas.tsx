"use client";

import { useCanRedo, useCanUndo, useHistory } from "@liveblocks/react";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import { useState } from "react";
import { CanvasMode, CanvasState } from "@/types/canvas";

interface CanvasProps {
  boardId: string;
}

export default function Canvas({ boardId }: CanvasProps) {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();

  return (
    <main className="w-full h-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        redo={history.redo}
        undo={history.undo}
      />
    </main>
  );
}
