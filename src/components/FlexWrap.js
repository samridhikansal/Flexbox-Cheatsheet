import React, { useState } from "react";
import styled from "styled-components";
import Card from "./card";
const FlexWrap = () => {
  const [wrap, setWrap] = useState("wrap");
  return (
    <>
      {" "}
      <Card
        heading="Flex-Flow"
        wrap={wrap}
        childHeight="40%"
        childWidth="40%"
      />
      <h4>Select an option:</h4>
      <form>
        <input
          type="radio"
          name="Wrap"
          value="nowrap"
          onClick={(e) => setWrap(e.target.value)}
        ></input>{" "}
        No-Wrap
        <input
          type="radio"
          name="wrap"
          value="wrap"
          onClick={(e) => setWrap(e.target.value)}
        ></input>{" "}
        Wrap
        <input
          type="radio"
          name="wrap"
          value="wrap-reverse"
          onClick={(e) => setWrap(e.target.value)}
        ></input>{" "}
        Wrap-Reverse
      </form>
    </>
  );
};

export default FlexWrap;
