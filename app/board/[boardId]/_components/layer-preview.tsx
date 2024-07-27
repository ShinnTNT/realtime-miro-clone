"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react";
import { memo } from "react";
import { Rectangle } from "./rectangle";
import Ellipse from "./ellipse";
import { Text } from "./text";
import { Note } from "./note";
import { Path } from "./path";
import { colorToCss } from "@/lib/utils";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor: string;
}

export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Path:
        return (
          <Path
            stroke={selectionColor}
            x={layer.x}
            y={layer.y}
            fill={layer.fill ? colorToCss(layer.fill) : "#000"}
            onPointerDown={(e) => onLayerPointerDown(e, id)}
            points={layer.points}
            key={id}
          />
        );
      case LayerType.Rectangle:
        return (
          <Rectangle
            selectionColor={selectionColor}
            onPointerDown={onLayerPointerDown}
            layer={layer}
            id={id}
          />
        );
      case LayerType.Ellipse:
        return (
          <Ellipse
            selectionColor={selectionColor}
            onPointerDown={onLayerPointerDown}
            layer={layer}
            id={id}
          />
        );
      case LayerType.Text:
        return (
          <Text
            selectionColor={selectionColor}
            onPointerDown={onLayerPointerDown}
            layer={layer}
            id={id}
          />
        );
      case LayerType.Note:
        return (
          <Note
            selectionColor={selectionColor}
            onPointerDown={onLayerPointerDown}
            layer={layer}
            id={id}
          />
        );
      default:
        console.warn("Unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
