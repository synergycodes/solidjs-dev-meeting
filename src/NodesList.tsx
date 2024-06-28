import type { Component } from "solid-js";

type Props = { nodes: go.ObjectData[] };

export const NodeList: Component<Props> = ({ nodes }) => {
  return (
    <ul>
      {nodes.map((node) => (
        <li>Node {node.key}</li>
      ))}
    </ul>
  );
};
