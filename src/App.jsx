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

        expression = expression
          .replace(/--/g, '+')  // Handle double minus
          .replace(/\+-/g, '-')  // Handle plus-minus
          .replace(/-\+/g, '-')  // Handle minus-plus

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

    if (value === "x^y" || value === "^") {
      setInput(input + "**");
      return;
    }

    if (value === "log") {
      try {
          const logResult = Math.log10(eval(input));
          setResult(logResult.toFixed(4));
      } catch {
          setResult("Error");
      }
      return;
  }

  if (value === "ln") {
      try {
          const lnResult = Math.log(eval(input));
          setResult(lnResult.toFixed(4));
      } catch {
          setResult("Error");
      }
      return;
  }

  if (value === "EXP") {
      setInput(input + "E");
      return;
  }

  if (value === "n!") {
      const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));
      try {
          const factResult = factorial(parseInt(eval(input)));
          setResult(factResult);
      } catch {
          setResult("Error");
      }
      return;
  }

    if (value === "1/x") {
      try {
          const reciprocal = 1 / eval(input);
          setResult(reciprocal.toFixed(4));
      } catch {
          setResult("Error");
      }
      return;
  }
  
  if (value === "Deg") {
      try {
          const radians = eval(input) * (Math.PI / 180);
          setResult(radians.toFixed(4));
      } catch {
          setResult("Error");
      }
      return;
  }
  
  if (value === "Rad") {
      try {
          const degrees = eval(input) * (180 / Math.PI);
          setResult(degrees.toFixed(4));
      } catch {
          setResult("Error");
      }
      return;
  }
  
  if (value === "Ans") {
      setInput(input + result);
      return;
  }

    if (value === "(") {
      setInput(input + "(");
      return;
    }

    if (value === ")") {
      setInput(input + ")");
      return;
    }

    if (value === "acos") {
      try {
        const computedResult = Math.acos(eval(input));
        setResult(computedResult.toFixed(4));
      } catch {
        setResult("Error");
      }
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
          { label: "Deg", className: "numSymbols" },
          { label: "Rad", className: "numSymbols" },
          { label: "sin", className: "numSymbols" },
          { label: "cos", className: "numSymbols" },
          { label: "tan", className: "numSymbols" },
          { label: "π", className: "numSymbols" },
          { label: "e", className: "numSymbols" },
          { label: "asin", className: "numSymbols" },
          { label: "acos", className: "numSymbols" },
          { label: "atan", className: "numSymbols" },
          { label: "x²", className: "numSymbols" },
          { label: "√", className: "numSymbols" },
          { label: "x^y", className: "numSymbols" },
          { label: "ln", className: "numSymbols" },
          { label: "EXP", className: "numSymbols" },
          { label: "x³", className: "numSymbols" },
          { label: "∛", className: "numSymbols" },
          { label: "log", className: "numSymbols" },
          { label: "n!", className: "numSymbols" },
          { label: "1/x", className: "numSymbols" },
          { label: "7", className: "btn-num" },
          { label: "8", className: "btn-num" },
          { label: "9", className: "btn-num" },
          { label: "AC", className: "numRemovers" },
          { label: "DEL", className: "numRemovers" },
          { label: "4", className: "btn-num" },
          { label: "5", className: "btn-num" },
          { label: "6", className: "btn-num" },
          { label: "+", className: "operator" },
          { label: "-", className: "operator" },
          { label: "1", className: "btn-num" },
          { label: "2", className: "btn-num" },
          { label: "3", className: "btn-num" },
          { label: "*", className: "operator" },
          { label: "/", className: "operator" },
          { label: "0", className: "btn-num" },
          { label: ".", className: "operator" },
          { label: "(", className: "operator" },
          { label: ")", className: "operator" },
          { label: "^", className: "operator" },
          { label: "Ans", className: "btn-results" },
          { label: "=", className: "btn-results" }
        ].map(({ label, className }) => (
          <button key={label} className={className} onClick={() => handleButtonClick(label)}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScientificCalculator;
