import { useState } from "react";

import { Button } from "./ui/button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>Click me</Button>
      <p>Count: {count}</p>
    </>
  );
}

export default Counter;
