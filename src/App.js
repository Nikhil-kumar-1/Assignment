import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let counterStyle = {
    color: "green",
    fontSize: "50px"
  };

  if (count >= 0 && count <= 4) {
    counterStyle.color = "green";
  } else if (count >= 5 && count <= 9) {
    counterStyle.color = "blue";
  } else {
    counterStyle.color = "red";
  }

  return (
    <div className="header">
      <h1>Increment Decrement</h1>
    <div className="App">
     
      <h1 style={counterStyle}>{count}</h1>
      <button className="one" onClick={incrementCount}>Increment</button>
      <button className="one" onClick={decrementCount}>Decrement</button>
    </div>
    </div>
  );
}

export default App;
