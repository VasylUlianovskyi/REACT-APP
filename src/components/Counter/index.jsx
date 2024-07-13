import { useState } from "react";
import style from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  function decrement() {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span> {count} </span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
