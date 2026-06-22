// 6th code lo app.jsx code edhi
// 
// import Header from "./Header";
// import ProductList from "./ProductList";
// import Footer from "./Footer";

// function App() {
//   return (
//     <>
//       <Header />
//       <ProductList />
//       <Footer />
//     </>
//   );
// }

// export default App;







// 7 th code app.jx code edhi
// import Parent from "./7.parent to Child";
// function App() {
//   return(
//     <>
//       <Parent />
//     </>
//   );
// }
// export default App;




// 8 th code app.jsx code edhi
// import Parent from "./8. child to parent";

// function App() {
//   return(
//     <div>
//       <Parent />
//     </div>
//   );
// }
// export default App;




// 10th question app.jsx lo run chyli so aa code ni ekkada paste chesi run chyli
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






// 11th question app.jsx lo run chyli so aa code ni ekkada paste chesi run chyli
// import { useState, useEffect } from "react";

// function FixedTimer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(c => c + 1);
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return <h2>Fixed Counter: {count}</h2>;
// }

// export default FixedTimer;