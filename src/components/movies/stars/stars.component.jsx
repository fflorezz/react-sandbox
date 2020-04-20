import React from "react";

import { stars_container, stars_empty, stars_full } from "./styles.module.scss";

import { ReactComponent as StarsEmpty } from "../../../assets/empty-stars.svg";
import { ReactComponent as StarsFull } from "../../../assets/full-start.svg";

const Stars = ({ rating }) => {
  const porcentage = (rating * 100) / 10;
  return (
    <div className={stars_container}>
      <div className={stars_empty}>
        <StarsEmpty />
      </div>
      <div className={stars_full} style={{ width: `${porcentage}%` }}>
        <StarsFull />
      </div>
    </div>
  );
};

export default Stars;
