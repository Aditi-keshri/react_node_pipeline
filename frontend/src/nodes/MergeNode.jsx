import BaseNode from "../components/BaseNode";

export default function MergeNode() {
  return (
    <BaseNode title="Merge" inputs={["a", "b"]} outputs={["result"]}>
      <p>Merges two inputs</p>
    </BaseNode>
  );
}
