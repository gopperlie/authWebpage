import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more``
      </p>
    </>
  );
}

export default App;
