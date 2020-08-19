import React, { useState } from "react";
// importing styled components
import styled from "styled-components";
import Card from "./card";

// coding componsnt
const FlexGrow = () => {
  const [flexgrow, setflexgrow] = useState(1);

  return (
    <>
      <Card heading="Flex-Grow" parentHeight="250px" flexgrow={flexgrow} />
      <h4> Select an option :</h4>
      <form>
        {" "}
        <input
          type="radio"
          name="direction"
          value="0"
          onClick={(e) => {
            setflexgrow(e.target.value);
          }}
        ></input>{" "}
        No Grow( value=0)
        <input
          type="radio"
          name="direction"
          value="1"
          onClick={(e) => {
            setflexgrow(e.target.value);
          }}
        ></input>{" "}
        Grow( value=1)
      </form>
    </>
  );
};

export default FlexGrow;
