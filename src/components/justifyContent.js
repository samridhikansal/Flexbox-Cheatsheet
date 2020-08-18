import React, { useState } from "react";
// importing styled components
import styled from "styled-components";
import Card from "./card";

// coding componsnt
const JustifyContent = () => {
  const [justify, setjustify] = useState("flex-start");

  return (
    <>
      <Card heading="Justify-Content" justify={justify} />
      <h4> Select an option :</h4>
      <form>
        <input
          type="radio"
          name="justify"
          value="flex-start"
          onClick={(e) => {
            setjustify(e.target.value);
          }}
        ></input>{" "}
        Flex Start
        <input
          type="radio"
          name="justify"
          value="flex-end"
          onClick={(e) => setjustify(e.target.value)}
        ></input>{" "}
        Flex End
        <input
          type="radio"
          name="justify"
          value="space-between"
          onClick={(e) => setjustify(e.target.value)}
        ></input>{" "}
        Space-Between
        <input
          type="radio"
          name="justify"
          value="space-around"
          onClick={(e) => setjustify(e.target.value)}
        ></input>{" "}
        Space-Around
      </form>
    </>
  );
};

export default JustifyContent;
