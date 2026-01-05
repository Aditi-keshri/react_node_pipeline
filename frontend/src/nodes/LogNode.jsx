import BaseNode from "../components/BaseNode";

export default function LogNode() {
  return (
    <BaseNode title="Log" inputs={["message"]}>
      <p>Logs message</p>
    </BaseNode>
  );
}
