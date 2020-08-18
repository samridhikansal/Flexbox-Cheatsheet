import React, { Component } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
`;
const FlexParentContainer = styled.div`
  background-color: yellow;
  font-size: 3vw;
  border: solid 2px black;
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "nowrap")};
`;

const FlexChild = styled.div`
  height: ${(props) => (props.childHeight ? props.childHeight : "5vw")};
  width: ${(props) => (props.childWidth ? props.childWidth : "10vw")};
  background-color: black;
  font-size: inherit;
  color: white;
  padding: 0.5vw;
  margin: 0.5vw;
  align-items: center;
  text-align: center;
`;
const CodeContainer = styled.div`
  background-color: greenyellow;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0.5vw;
  padding: 0.5vw;
`;
const Card = ({
  heading,
  direction,
  wrap,
  justify,
  childHeight,
  childWidth,
}) => {
  return (
    <CardWrapper>
      {" "}
      <h2>{heading}</h2>
      <FlexParentContainer direction={direction} wrap={wrap} justify={justify}>
        <FlexChild childWidth={childWidth} childHeight={childHeight}>
          Child1
        </FlexChild>
        <FlexChild childWidth={childWidth} childHeight={childHeight}>
          Child2
        </FlexChild>
        <FlexChild childWidth={childWidth} childHeight={childHeight}>
          Child3
        </FlexChild>
        <FlexChild childWidth={childWidth} childHeight={childHeight}>
          Child4
        </FlexChild>
        {/* <FlexChild>Child5</FlexChild> */}
      </FlexParentContainer>
      <CodeContainer>
        <h3>Code:</h3>
        <p>.parent{"{"}</p>
        <p> display:flex ; </p>
        <p>flex-direction: {direction ? direction : "row"}; </p>
        <p>justify-content: {justify ? justify : "flex-start"};</p>
        <p>flex-wrap:{wrap ? wrap : "nowrap"};</p>
        <p>{"}"}</p>
      </CodeContainer>
    </CardWrapper>
  );
};

export default Card;
