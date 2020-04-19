import React, { useState } from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  margin-bottom: 10px;
  padding: 20px 30px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => (props.cardChange ? "white" : "papayawhip")};
  border-radius: 10px;
  border: solid 1px transparent;

  .title {
    margin-bottom: 20px;
  }
  .subtitle {
    margin-bottom: 10px;
  }
  ${(props) => (props.cardChange ? `border: solid 1px black;` : "")}
`;

const BtnStyle = styled.button`
  margin-top: 30px;
  padding: 10px 0;
  width: 100px;
  border-radius: 5px;
  border-style: none;
  color: white;
  background-color: rgb(72, 83, 68);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(119, 136, 112);
  }
  ${(props) =>
    props.cardChange
      ? `color: black;
         background-color: rgb(188, 221, 176);`
      : ""}
`;

const CardStyled = () => {
  const [cardChange, setCardChange] = useState(false);

  return (
    <CardStyle cardChange={cardChange}>
      <h1 className="title">Styled Component</h1>
      <h2 className="subtitle">Subtitle</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, ullam
      </p>
      <BtnStyle
        cardChange={cardChange}
        onClick={() => setCardChange(!cardChange)}
      >
        Toggle Color
      </BtnStyle>
    </CardStyle>
  );
};

export default CardStyled;
