import { Component, Show, createSignal, onCleanup, onMount } from "solid-js";
import { NodeList } from "./NodesList";
import { diagram } from "./diagram-context";

export const Drawer: Component = () => {
  const [selection, setSelection] = createSignal<go.ObjectData[]>([]);
  const nodeSelected = () => !!selection().length;

  const listener: go.DiagramEventHandler = (event) => {
    setSelection(event.diagram.selection.map(({ data }) => data).toArray());
  };

  onMount(() => {
    diagram()?.addDiagramListener("ChangedSelection", listener);
  });

  onCleanup(() => {
    diagram()?.removeDiagramListener("ChangedSelection", listener);
  });

  return (
    <div class="drawer">
      <Show when={nodeSelected()} fallback={<span>Please select a node</span>}>
        <span>
          First selected key: {JSON.stringify(selection().at(0)?.key)}
        </span>
        <NodeList nodes={selection()} />
      </Show>
    </div>
  );
};
