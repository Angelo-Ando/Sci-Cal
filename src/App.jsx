import React, { useState } from "react";
import "./App.css";

const ScientificCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        let expression = input
          .replace(/sin\(/g, "Math.sin(")
          .replace(/cos\(/g, "Math.cos(")
          .replace(/tan\(/g, "Math.tan(")
          .replace(/asin\(/g, "Math.asin(")
          .replace(/acos\(/g, "Math.acos(")
          .replace(/atan\(/g, "Math.atan(")
          .replace(/(\d+)\s*\(/g, "$1*("); 

        
        expression = expression
          .replace(/Math\.sin\(/g, "Math.sin((Math.PI/180)*")
          .replace(/Math\.cos\(/g, "Math.cos((Math.PI/180)*")
          .replace(/Math\.tan\(/g, "Math.tan((Math.PI/180)*");

        let computedResult = eval(expression); 

        
        expression = expression
          .replace(/Math\.asin\(/g, "(180/Math.PI)*Math.asin(")
          .replace(/Math\.acos\(/g, "(180/Math.PI)*Math.acos(")
          .replace(/Math\.atan\(/g, "(180/Math.PI)*Math.atan(");

        computedResult = eval(expression); 

        setResult(computedResult.toFixed(4)); 
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
      setInput(`Math.log10(${input})`);
      return;
    }
    if (value === "ln") {
      setInput(`Math.log(${input})`);
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
