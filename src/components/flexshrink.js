import React, { useState } from "react";
//importing styled components
import styled from "styled-components";
import Card from "./card";

// coding componsnt
const FlexShrink = () => {
  const [flexshrink, setflexshrink] = useState(0);

  return (
    <>
      <Card
        heading="Flex-Shrink"
        childWidth="40%"
        flexshrink={flexshrink}
        wrap="nowrap"
      />
      <h4> Select an option (for the child3) :</h4>
      <form>
        {" "}
        <input
          type="radio"
          name="direction"
          value="0"
          onClick={(e) => {
            setflexshrink(e.target.value);
          }}
        ></input>{" "}
        No Shrink( value=0)
        <input
          type="radio"
          name="direction"
          value="1"
          onClick={(e) => {
            setflexshrink(e.target.value);
          }}
        ></input>{" "}
        Shrink( value=1)
      </form>
    </>
  );
};

export default FlexShrink;
