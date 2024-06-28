import { type Component } from "solid-js";
import { Diagram } from "./Diagram";
import { Drawer } from "./Drawer";

export const App: Component = () => {
  return (
    <>
      <Diagram />
      <Drawer />
    </>
  );
};
