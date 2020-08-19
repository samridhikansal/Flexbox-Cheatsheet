import React from "react";

//import  GlobalStyle component and place is above the app
import GlobalStyle from "./styled/GlobalStyle";
//import Sidebar from "./components/sidebar";
import Header from "./components/header";
import FlexDirection from "./components/FlexDirection";
import FlexWrap from "./components/FlexWrap";
import JustifyContent from "./components/justifyContent";
import AlignItem from "./components/alignItem";
import FlexGrow from "./components/flexgrow";
import FlexShrink from "./components/flexshrink";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <FlexDirection />
      <JustifyContent />
      <FlexWrap></FlexWrap>
      <AlignItem></AlignItem>
      <FlexGrow></FlexGrow>
      <FlexShrink></FlexShrink>
    </>
  );
}

export default App;
