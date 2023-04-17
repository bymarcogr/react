import React, { useState } from "react";
import "../styles/global.css";
import GenericButton from "./genericButton";

export default function Counter(props) {
  const [number, setNumber] = useState(props.number ?? 0);

  return (
    <span>
      <span title={"number-to-display"} className={"counter-title"}>
        {number}
      </span>
      <br />
      <GenericButton
        title={"-"}
        onClick={() => setNumber(number - 1)}
        className={props.buttonClassName}
      ></GenericButton>
      <GenericButton
        title={"+"}
        onClick={() => setNumber(number + 1)}
        className={props.buttonClassName}
      ></GenericButton>
    </span>
  );
}

Counter.defaultProps = {
  number: 0,
};
