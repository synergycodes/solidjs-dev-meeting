import * as go from "gojs";
import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { createDiagram } from "./create-diagram";

let diagramDiv: HTMLDivElement;
let removeDiagram = () => {};

export const Diagram: Component = () => {
  const [diagram, setDiagram] = createSignal<go.Diagram | null>(null);

  onMount(() => {
    const data = createDiagram(diagramDiv);
    setDiagram(data.diagram);
    removeDiagram = data.removeDiagram;
  });

  onCleanup(() => {
    removeDiagram();
  });

  return <div ref={diagramDiv} class="diagram"></div>;
};
