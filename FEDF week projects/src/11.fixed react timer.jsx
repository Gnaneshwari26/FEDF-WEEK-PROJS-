import { useState, useEffect } from "react";

function FixedTimer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h2>Fixed Counter: {count}</h2>;
}

export default FixedTimer;