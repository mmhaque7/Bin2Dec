import React, { useState } from "react";
import "./App.css";

function App() {
  const [binaryText, setbinaryText] = useState("");
  const [decimalNum, setDecimalNum] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrMsg("Enter 1 or 0");
      return;
    }
    setErrMsg();
    //    setErrMsgerrMsg();
    const binaryNum = Number(binaryText);
    const decimal = parseInt(binaryNum, 2).toString(10);
    setDecimalNum(decimal);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {errMsg && (
          <div className="error-msg">
            <i className="error-icon">⚠️</i>
            <span className="error"> {errMsg}</span>
          </div>
        )}
        <fieldset className="binary-set">
          <label className="binary-label">Binary Number:</label>
          <input
            type="text"
            className="binary"
            placeholder="Enter 0 or 1"
            value={binaryText}
            onChange={(e) => setbinaryText(e.target.value)}
          />
          <button type="submit" className="btn">
            Convert
          </button>
        </fieldset>
        <fieldset>Decimal : {decimalNum}</fieldset>
      </form>
    </div>
  );
}

export default App;
