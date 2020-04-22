import React, { useState } from "react";
import { Card, Btn } from "./styles";

const CardEmotion = () => {
  const [cardChange, setCardChange] = useState(false);

  return (
    <Card cardChange={cardChange}>
      <h1 className="title">Emotion CSS</h1>
      <h2 className="subtitle">Subtitle</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, ullam
      </p>
      <Btn onClick={() => setCardChange(!cardChange)}>Toggle Color</Btn>
    </Card>
  );
};

export default CardEmotion;
