import React, { useState } from "react";
import Button from "../CalculatorSection/Button";

const BUTTON_LABELS = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  "C",
  "0",
  "00",
  "/",
  ".",
  "=",
  "Del",
];

const CalculatorSection = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
    } else if (value === "Del") {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + value);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-black flex justify-center mt-20">
        {" "}
        Calculator{" "}
      </h2>
      <div className="max-w-xs max-h-96  mx-auto mt-10 p-4  border rounded-lg shadow-lg bg-black max-width-">
        <input
          className="w-full py-2 px-3 mb-4 border rounded"
          type="text"
          value={result}
          readOnly
        />
        <br />
        <div className="grid grid-cols-4 gap-2 text-white">
          {BUTTON_LABELS.map((button, index) => (
            <Button
              key={index}
              onClick={() => handleClick(button)}
              value={button}
            >
              {button}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalculatorSection;
