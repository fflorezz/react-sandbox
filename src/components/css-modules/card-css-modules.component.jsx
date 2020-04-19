import React, { useState } from "react";

import styles from "./styles.module.scss";

const CardCssModules = () => {
  const [cardChange, setCardChange] = useState(false);

  return (
    <div className={cardChange ? styles.card_change : styles.card}>
      <h1 className="title">CSS Modules</h1>
      <h2 className="subtitle">Subtitle</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, ullam
      </p>
      <button
        className={cardChange ? styles.btn_change : styles.btn}
        onClick={() => setCardChange(!cardChange)}
      >
        Toggle Color
      </button>
    </div>
  );
};

export default CardCssModules;
