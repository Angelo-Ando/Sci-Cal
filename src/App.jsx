import React, { useState } from "react";
import "./App.css";

const ScientificCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [secondModeDropdown, setSecondModeDropdown] = useState(false);
  const [secondModeButtons, setSecondModeButtons] = useState(false);

  const toggleSecondModeDropdown = () => {
    setSecondModeDropdown(!secondModeDropdown);
  };

  const toggleSecondModeButtons = () => {
    setSecondModeButtons(!secondModeButtons);
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch {
        setResult("Error");
      }
      return;
    }

    if (value === "C") {
      setInput("");
      setResult("");
      return;
    }

    if (value === "Del") {
      setInput(input.slice(0, -1));
      return;
    }

    const lastChar = input.slice(-1);

    if (["+", "*", "/"].includes(value) && ["+", "*", "/"].includes(lastChar)) {
      return; // Prevent consecutive operators
    }

    if (value === "-" && (!input || ["+", "*", "/"].includes(lastChar))) {
      setInput(input + value);
      return;
    }

    if (value !== "-" && ["+", "*", "/"].includes(lastChar) && ["+", "*", "/"].includes(value)) {
      return;
    }

    setInput(input + value);
  };

  return (
    <div className="mainCalcuContainer">
      <input
        type="text"
        className="SolutionTxtbox"
        value={input}
        onChange={() => {}}
        placeholder="Input your solutions here"
      />
      <input
        type="text"
        className="AnswerTxtbox"
        value={result}
        onChange={() => {}}
        placeholder="Result"
      />

      <div className="btnContainers1">
        <div className="btnCon1">
          {["DEG", "F-E", "MC", "MR"].map((btn) => (
            <button key={btn}>{btn}</button>
          ))}
        </div>
        <div className="btnCon2">
          {["M+", "M-", "MS", "Mv"].map((btn) => (
            <button key={btn}>{btn}</button>
          ))}
        </div>
      </div>

      <div className="dropdownContainer">
        <button
          className={`secondButton ${secondModeDropdown ? "active" : ""}`}
          onClick={toggleSecondModeDropdown}
        >
          2nd
        </button>
        <select>
          {["sin", "cos", "tan", "hyp", "sec", "csc", "cot"].map((func) => (
            <option key={func}>{secondModeDropdown ? `${func}-1` : func}</option>
          ))}
        </select>
        <select>
          {["abs", "floor", "ceil", "rand", "->dms", "->deg"].map((func) => (
            <option key={func}>{func}</option>
          ))}
        </select>
      </div>

      <div className="allBtnsContainer">
        {[
          ["2nd", "π", "e", "C", "Del"],
          [secondModeButtons ? "x^3" : "x^2", "1/x", "abs", "exp", "mod"],
          [secondModeButtons ? "3√x" : "2√x", "(", ")", "n!", "/"],
          [secondModeButtons ? "y√x" : "x^y", "7", "8", "9", "*"],
          [secondModeButtons ? "2^x" : "10^x", "4", "5", "6", "-"],
          [secondModeButtons ? "logyX" : "log", "1", "2", "3", "+"],
          [secondModeButtons ? "e^x" : "ln", "+/-", "0", ".", "="]
        ].map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((btn) => (
              <button
                key={btn}
                className={`
                  ${btn === "2nd" ? "secondButton" : ""}
                  ${btn === "=" ? "equals-btn" : ""}
                  ${btn === "C" || btn === "Del" ? "clear-btn" : ""}
                  ${["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(btn) ? "num-btn" : ""}
                `}
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScientificCalculator;
