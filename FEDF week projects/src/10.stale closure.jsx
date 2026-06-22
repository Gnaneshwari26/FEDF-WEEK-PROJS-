import { useState, useEffect } from "react";

function BuggyTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h2>Buggy Counter: {count}</h2>;
}

export default BuggyTimer;