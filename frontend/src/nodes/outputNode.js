import BaseNode from "../components/BaseNode";

export default function OutputNode() {
  return (
    <BaseNode title="Output" inputs={["result"]}>
      <p>Final output</p>
    </BaseNode>
  );
}
