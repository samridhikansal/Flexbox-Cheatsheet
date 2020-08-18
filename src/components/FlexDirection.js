import React, { useState } from "react";
// importing styled components
import styled from "styled-components";
import Card from "./card";

// coding componsnt
const FlexDirection = () => {
  const [direction, setDirection] = useState("row");

  return (
    <>
      <Card heading="Flex-Direction" direction={direction} />
      <h4> Select an option :</h4>
      <form>
        {" "}
        <input
          type="radio"
          name="direction"
          value="row"
          onClick={(e) => {
            setDirection(e.target.value);
          }}
        ></input>{" "}
        Row{" "}
        <input
          type="radio"
          name="direction"
          value="column"
          onClick={(e) => {
            setDirection(e.target.value);
          }}
        ></input>{" "}
        Column{" "}
      </form>
    </>
  );
};

export default FlexDirection;
