import React, { useState } from "react";
// importing styled components
import styled from "styled-components";
import {
  FlexContainer,
  Flexitem,
  FlexitemContainer,
  Code,
} from "./../styled/Flex";

// Flex items

// coding componsnt
const FlexDirection = () => {
  const [direction, setdirection] = useState("row");

  return (
    <FlexContainer>
      <h1>Flexbox Orientation</h1>
      <FlexitemContainer direction={direction}>
        <Flexitem>Item1</Flexitem>
        <Flexitem>Item2</Flexitem>
        <Flexitem>Item3</Flexitem>
        <Flexitem>Item4</Flexitem>
      </FlexitemContainer>
      <h2> Choose the view from the options</h2>
      <div>
        <input
          type="radio"
          name="direction"
          value="row"
          checked
          onClick={(e) => {
            setdirection(e.target.value);
          }}
        />
        <span>Row</span>
        <input
          type="radio"
          name="direction"
          value="column"
          onClick={(e) => {
            setdirection(e.target.value);
          }}
        />
        <span>Column</span>
        <Code>
          <p>.parent{"{"}</p>
          <p> display:flex ; </p>
          <p>flex-direction: {direction}; </p>
          <p>{"}"}</p>
        </Code>
      </div>
    </FlexContainer>
  );
};

export default FlexDirection;
