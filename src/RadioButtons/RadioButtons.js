import Button from "components/Button/Button";
import "./RadioButtons.css";
import { useState } from "react";

const RadioButtons = () => {
  const [activeButton, setActiveButton] = useState("");

  return (
    <div>
      <Button
        text="Apple"
        className={`Default-button radio-button ${
          activeButton === "Apple" && "radio-button-active"
        }`}
        onClick={() => setActiveButton("Apple")}
      />
      <Button
        text="Pear"
        className={`Default-button radio-button ${
          activeButton === "Pear" && "radio-button-active"
        }`}
        onClick={() => setActiveButton("Pear")}
      />
      <Button
        text="Orange"
        className="Default-button radio-button"
        disabled
        onClick={() => setActiveButton("Pear")}
      />
    </div>
  );
};

export default RadioButtons;
