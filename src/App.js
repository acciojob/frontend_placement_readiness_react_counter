import "./styles.css";

import React, { useContext } from "react";

const CounterContext = React.createContext();

function CounterProvider({ children }) {
  return children;
}

function Counter() {
  return (
    <div>
      <h2>Counter:</h2>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
