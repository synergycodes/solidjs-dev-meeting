import { For, createEffect, type Component } from "solid-js";

type Props = {
  nodes: go.ObjectData[];
  log: boolean;
};

export const NodeList: Component<Props> = (props) => {
  if (props.log) {
    createEffect(() => {
      console.log(props.nodes);
    });
  }

  return (
    <ul>
      <For each={props.nodes}>{(node) => <li>Node {node.key}</li>}</For>
    </ul>
  );
};
