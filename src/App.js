import { useState, useCallback } from "react";
import Hello from "./Hello";
function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );
  return (
    <div>
      <Hello increment={increment} />
      <div>{count}</div>
    </div>
  );
}

export default App;
