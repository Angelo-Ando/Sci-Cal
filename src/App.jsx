import React, { useState } from "react";
import "./App.css"; 

const ScientificCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState(0);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch {
        setResult("Error");
      }
      return;
    }

    if (value === "AC") {
      setInput("");
      setResult("");
      return;
    }

    if (value === "DEL") {
      setInput(input.slice(0, -1));
      return;
    }

    if (value === "π") {
      setInput(input + "3.1416");
      return;
    }
    if (value === "e") {
      setInput(input + "2.7183");
      return;
    }

    if (["sin", "cos", "tan", "asin", "acos", "atan"].includes(value)) {
      setInput(`${value}(${input})`);
      return;
    }

    if (value === "x²") {
      setInput(`(${input})**2`);
      return;
    }
    if (value === "x³") {
      setInput(`(${input})**3`);
      return;
    }

    if (value === "√") {
      setInput(`(${input})**(1/2)`);
      return;
    }
    if (value === "∛") {
      setInput(`(${input})**(1/3)`);
      return;
    }

    if (value === "x^y") {
      setInput(input + "**");
      return;
    }

    if (value === "log") {
      setInput(`log10(${input})`);
      return;
    }
    if (value === "ln") {
      setInput(`ln(${input})`);
      return;
    }

    if (value === "EXP") {
      setInput(input + "E");
      return;
    }

    if (value === "n!") {
      const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));
      try {
        setResult(factorial(parseInt(input)));
      } catch {
        setResult("Error");
      }
      return;
    }

    if (value === "1/x") {
      setInput(`1/(${input})`);
      return;
    }

    if (value === "Deg") {
      setInput(`${input} * (Math.PI / 180)`);
      return;
    }

    if (value === "Rad") {
      setInput(`${input} * (180 / Math.PI)`);
      return;
    }

    if (value === "Ans") {
      setInput(input + result);
      return;
    }

    setInput(input + value);
  };

  return (
    <div className="calculator-container">
      <input
        type="text"
        className="display"
        value={input}
        readOnly
        placeholder="Input"
      />
      <input
        type="text"
        className="display result"
        value={result}
        readOnly
        placeholder="Result"
      />

      <div className="buttons">
        {[
          "Deg", "Rad", "π", "e", "AC", "DEL",
          "sin", "cos", "tan", "asin", "acos", "atan",
          "x²", "x³", "√", "∛", "x^y", "log", "ln",
          "EXP", "n!", "1/x", "7", "8", "9", "/",
          "4", "5", "6", "*", "1", "2", "3", "-",
          "0", ".", "=", "+", "Ans"
        ].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScientificCalculator;
