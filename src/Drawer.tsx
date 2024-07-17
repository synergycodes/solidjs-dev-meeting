import { Component, Show, createSignal, onCleanup, onMount } from "solid-js";
import { NodeList } from "./NodesList";
import { diagram } from "./diagram-context";

export const Drawer: Component = () => {
  const [selection, setSelection] = createSignal<go.ObjectData[]>([]);
  const [logger, setLogger] = createSignal(true);
  const [showList, setShowList] = createSignal(false);
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
      <button onClick={() => setLogger(!logger())}>
        Logging {logger() ? "on" : "off"}
      </button>
      <Show when={nodeSelected()} fallback={<span>Please select a node</span>}>
        <span>
          First selected key: {JSON.stringify(selection().at(0)?.key)}
        </span>
      </Show>
      <button onClick={() => setShowList(true)}>Show List</button>
      <Show when={showList()}>
        <NodeList nodes={selection()} log={logger()} />
      </Show>
    </div>
  );
};
