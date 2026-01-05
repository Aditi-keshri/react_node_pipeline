import BaseNode from "../components/BaseNode";

export default function CounterNode() {
  return (
    <BaseNode title="Counter" inputs={["start"]} outputs={["count"]}>
      <p>Counts numbers</p>
    </BaseNode>
  );
}
