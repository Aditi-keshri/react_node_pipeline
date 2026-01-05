import BaseNode from "../components/BaseNode";

export default function TimerNode() {
  return (
    <BaseNode title="Timer" outputs={["time"]}>
      <p>Emits time after delay</p>
    </BaseNode>
  );
}
