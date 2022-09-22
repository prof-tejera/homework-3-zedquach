import Button from "components/Button/Button";
import "./RadioButtons.css";
import { useState } from "react";

const RadioButtons = () => {
  const [activeButton, setActiveButton] = useState("");
  const fruits = [
    { name: "Apple" },
    { name: "Pear" },
    { name: "Orange", disabled: true },
  ];

  return (
    <div>
      {fruits.map((fruit) => (
        <Button
          key={fruit.name}
          text={fruit.name}
          className={`Default-button radio-button ${
            activeButton === fruit.name && "radio-button-active"
          }`}
          disabled={fruit.disabled}
          onClick={() => setActiveButton(fruit.name)}
        />
      ))}
    </div>
  );
};

export default RadioButtons;
