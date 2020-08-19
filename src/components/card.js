import React, { Component } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
`;
const FlexParentContainer = styled.div`
  height: ${(props) => (props.parentheight ? props.parentheight : "auto")};
  background-color: yellow;
  font-size: 3vw;
  border: solid 2px black;
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "wrap")};
  align-items: ${(props) => (props.align ? props.align : "center")};
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
  flex-grow: ${(props) => (props.flexgrow ? props.flexgrow : "0")};
  flex-shrink: ${(props) => (props.flexshrink ? props.flexshrink : "1")};
`;
const CodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CodeContainer = styled.div`
  background-color: greenyellow;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  childfeaturedWidth,
  align,
  parentHeight,
  flexgrow,
  flexshrink,
}) => {
  return (
    <CardWrapper>
      {" "}
      <h2>{heading}</h2>
      <FlexParentContainer
        direction={direction}
        wrap={wrap}
        justify={justify}
        parentheight={parentHeight}
        align={align}
      >
        <FlexChild childWidth={childWidth} childHeight={childHeight}>
          Child 1
        </FlexChild>
        <FlexChild childWidth={childWidth} childHeight={childHeight}>
          Child 2
        </FlexChild>
        <FlexChild
          childWidth={childWidth ? childWidth : childfeaturedWidth}
          childHeight={childHeight}
          flexgrow={flexgrow}
          flexshrink={flexshrink}
        >
          Child 3
        </FlexChild>
        <FlexChild childWidth={childWidth} childHeight={childHeight}>
          Child 4
        </FlexChild>
        {/* <FlexChild>Child5</FlexChild> */}
      </FlexParentContainer>
      <CodeWrapper>
        <CodeContainer>
          <h3>Code for Parent:</h3>
          <p>.parent{"{"}</p>
          <p>height:{parentHeight ? parentHeight : "auto"}</p>
          <p> display:flex ; </p>
          <p>flex-direction: {direction ? direction : "row"}; </p>
          <p>justify-content: {justify ? justify : "flex-start"};</p>
          <p>align-items: {align ? align : "center"};</p>
          <p>flex-wrap:{wrap ? wrap : "wrap"};</p>
          <p>{"}"}</p>
        </CodeContainer>
        <CodeContainer>
          <h3>Code for Children div:</h3>
          <p>.child{"{"}</p>
          <p>height:{childHeight ? childHeight : "5vw"};</p>
          <p>width : {childWidth ? childWidth : "10vw"};</p>
          <p>flex-grow:{flexgrow ? flexgrow : "0"}; </p>
          <p>Flex-shrink:1</p>
          <p>{"}"}</p>
        </CodeContainer>
      </CodeWrapper>
    </CardWrapper>
  );
};

export default Card;
