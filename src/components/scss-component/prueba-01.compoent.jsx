import React, { useState } from "react";
import "./prueba-01.styles.scss";

const Prueba01 = () => {
  const [cardChange, setCardChange] = useState(false);

  return (
    <div className={`card ${cardChange ? "change" : ""}`}>
      <h1 className="title">SCSS</h1>
      <h2 className="subtitle">Subtitle</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, ullam
      </p>
      <button className="btn" onClick={() => setCardChange(!cardChange)}>
        Toggle Color
      </button>
    </div>
  );
};

export default Prueba01;
