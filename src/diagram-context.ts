import * as go from "gojs";
import { createSignal } from "solid-js";

export const [diagram, setDiagram] = createSignal<go.Diagram | null>(null);
