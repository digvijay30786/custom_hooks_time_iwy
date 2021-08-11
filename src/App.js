import "./styles.css";
import HooksExample from "./components/HooksExamples";
import { Counter } from "./hooks/count";
import { useTimeout } from "./hooks/useTimeout";
export default function App() {
  const timeout = useTimeout(5000);
  return (
    <div className="App">
      <p style={{ color: "blue" }}>Problem - 1 </p>

      {timeout && <div>Show Div after 5 sec</div>}
      <p style={{ color: "red" }}>Problem -2 </p>
      <Counter />
      <p style={{ color: "green" }}>Problem -3 </p>
      <HooksExample />
    </div>
  );
}
