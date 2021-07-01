import React, { useRef } from "react";
const Hello = React.memo(({ increment }) => {
  const renders = useRef(0);
  console.log(`rendering:`, renders.current++);
  return <button onClick={() => increment(5)}>Hello</button>;
});

export default Hello;
