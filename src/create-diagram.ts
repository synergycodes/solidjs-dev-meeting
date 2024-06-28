import * as go from "gojs";

const $ = go.GraphObject.make;

export const createDiagram = (div: HTMLDivElement) => {
  let diagram: go.Diagram | null = $(go.Diagram, div);

  diagram.nodeTemplate = $(
    go.Node,
    go.Node.Spot,
    $(go.Shape, {
      figure: "RoundedRectangle",
      desiredSize: new go.Size(100, 100),
      fill: go.Brush.randomColor(),
    }),
    $(go.TextBlock, new go.Binding("text", "key"))
  );

  diagram.model.nodeDataArray = [{ key: 1 }, { key: 2 }, { key: 3 }];

  const removeDiagram = () => {
    if (diagram) {
      diagram.div = null;
    }
    diagram = null;
  };

  return {
    diagram,
    removeDiagram,
  };
};
