import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import "./css/Calc.css";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = async (label) => {
    // If number → query DB and append
    if (!isNaN(label)) {
      const res = await fetch(`/api/numbs/key/${label}`);
      const data = await res.json();
      const val = data.value; 
      setDisplay(display + val);
    } 
    // If operator
    else if (["+", "-", "x", "/"].includes(label)) {
      setPreviousValue(parseFloat(display));
      setOperator(label);
      setDisplay("");
    } 
    // If equals
    else if (label === "=") {
      if (previousValue != null && operator && display !== "") {
        const current = parseFloat(display);
        let result;

        switch (operator) {
          case "+": result = previousValue + current; break;
          case "-": result = previousValue - current; break;
          case "x": result = previousValue * current; break;
          case "/": result = previousValue / current; break;
          default: result = current;
        }

        setDisplay(result.toString());
        setPreviousValue(null);
        setOperator(null);
      }
    }
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;