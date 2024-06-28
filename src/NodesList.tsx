import { For, type Component } from "solid-js";

type Props = { nodes: go.ObjectData[] };

export const NodeList: Component<Props> = (props) => {
  return (
    <ul>
      <For each={props.nodes}>{(node) => <li>Node {node.key}</li>}</For>
    </ul>
  );
};
