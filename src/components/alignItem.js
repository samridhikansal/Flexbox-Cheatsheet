import React, { useState } from "react";
// importing styled components
import styled from "styled-components";
import Card from "./card";

// coding componsnt
const AlignItem = () => {
  const [align, setAlign] = useState("center");

  return (
    <>
      <Card
        heading="Align Item"
        align={align}
        parentHeight="250px"
        childHeight="auto"
      />
      <h4> Select an option :</h4>
      <form>
        <input
          type="radio"
          name="align"
          value="auto"
          onClick={(e) => {
            setAlign(e.target.value);
          }}
        ></input>{" "}
        Auto
        <input
          type="radio"
          name="align"
          value="flex-start"
          onClick={(e) => {
            setAlign(e.target.value);
          }}
        ></input>{" "}
        Flex Start
        <input
          type="radio"
          name="align"
          value="flex-end"
          onClick={(e) => {
            setAlign(e.target.value);
          }}
        ></input>{" "}
        Flex End
        <input
          type="radio"
          name="align"
          value="stretch"
          onClick={(e) => {
            setAlign(e.target.value);
          }}
        ></input>{" "}
        Stretch
        <input
          type="radio"
          name="align"
          value="baseline"
          onClick={(e) => {
            setAlign(e.target.value);
          }}
        ></input>{" "}
        Baseline
      </form>
    </>
  );
};

export default AlignItem;
