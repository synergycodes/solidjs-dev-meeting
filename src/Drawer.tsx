import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { diagram } from "./diagram-context";

export const Drawer: Component = () => {
  const [selection, setSelection] = createSignal<go.ObjectData | null>(null);

  const listener: go.DiagramEventHandler = (event) => {
    setSelection(event.diagram.selection.first()?.data ?? null);
  };

  onMount(() => {
    diagram()?.addDiagramListener("ChangedSelection", listener);
  });

  onCleanup(() => {
    diagram()?.removeDiagramListener("ChangedSelection", listener);
  });

  return (
    <div class="drawer">
      <span>First selected key: {JSON.stringify(selection()?.key)}</span>
    </div>
  );
};
