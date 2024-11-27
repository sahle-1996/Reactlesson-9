import React, { useState } from "react";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState(""); // State to track input value

  // Event handler for input changes
  const handleInputChange = (event) => {
    const value = event.target.value; // Get the current value of the input
    setInputValue(value); // Update state
    console.log(value); // Log the value to the console
  };

  return (
    <div>
      <h2>Type Something Below</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} // Attach the event handler
        placeholder="Start typing..."
        style={{ padding: "8px", fontSize: "16px", marginTop: "10px" }}
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default InputComponent;