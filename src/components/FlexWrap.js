import React, { useState } from "react";
import styled from "styled-components";
import Card from "./card";
const FlexWrap = () => {
  return (
    <>
      {" "}
      <Card
        heading="Flex-Flow"
        wrap="wrap"
        childHeight="40%"
        childWidth="40%"
      />
    </>
  );
};

export default FlexWrap;
