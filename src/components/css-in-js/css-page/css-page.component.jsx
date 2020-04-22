import React from "react";
import Prueba01 from "./../scss-component/prueba-01.compoent";
import CardStyled from "./../styled-components/card-styled";
import CardEmotion from "./../emotion/card-emotion";
import CardCssModules from "../css-modules/card-css-modules.component";

import { container } from "./css-page.module.scss";
function CssPage() {
  return (
    <div className={container}>
      <Prueba01 />
      <CardStyled />
      <CardEmotion />
      <CardCssModules />
    </div>
  );
}

export default CssPage;
