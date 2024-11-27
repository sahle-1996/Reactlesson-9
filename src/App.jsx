import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Input Field</h1>
        <p>Type something below and see the magic!</p>
      </header>
      <main>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Start typing here..."
          />
        </div>
        <p className="output">You typed: <strong>{inputValue}</strong></p>
      </main>
      <footer>
        <p>Created for React Enthusiasts</p>
      </footer>
    </div>
  );
}

export default App;
