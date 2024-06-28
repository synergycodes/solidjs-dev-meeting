import { Component } from "solid-js";
import { createDiagram } from "./create-diagram";

let diagramDiv: HTMLDivElement;

export const Diagram: Component = () => {
  createDiagram(diagramDiv);

  return <div ref={diagramDiv} class="diagram"></div>;
};
