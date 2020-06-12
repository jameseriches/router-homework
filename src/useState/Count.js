import React, { useState } from "react";

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  function add(num) {
    setCount(count + num);
  }
  return (
    <div>
      {count}
      <div onClick={() => add(1)}>+</div>
      <div onClick={() => add(-1)}>-</div>
    </div>
  );
}