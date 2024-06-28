import { Component, onCleanup, onMount } from "solid-js";
import { createDiagram } from "./create-diagram";
import { setDiagram } from "./diagram-context";

let diagramDiv: HTMLDivElement;
let removeDiagram = () => {};

export const Diagram: Component = () => {
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
