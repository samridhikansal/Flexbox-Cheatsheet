import React, { useState } from "react";
import styled from "styled-components";
import {
  FlexContainer,
  Flexitem,
  FlexitemContainer,
  Code,
} from "./../styled/Flex";

const FlexItemContainerModified = styled(FlexitemContainer)`
  width: 250px;
`;
const FlexWrap = () => {
  const itemwidth = "100%";
  return (
    <FlexContainer>
      <h2>Try Flex-Wrap Property</h2>
      <FlexitemContainer>
        <Flexitem width={itemwidth}>Item1</Flexitem>
        <Flexitem width={itemwidth}>Item1</Flexitem>
        <Flexitem width={itemwidth}>Item1</Flexitem>
        <Flexitem width={itemwidth}>Item1</Flexitem>
      </FlexitemContainer>
    </FlexContainer>
  );
};

export default FlexWrap;
