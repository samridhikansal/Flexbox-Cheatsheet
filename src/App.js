import React from "react";

//import  GlobalStyle component and place is above the app
import GlobalStyle from "./styled/GlobalStyle";
//import Sidebar from "./components/sidebar";
import Header from "./components/header";
import FlexDirection from "./components/FlexDirection";
import FlexWrap from "./components/FlexWrap";
import JustifyContent from "./components/justifyContent";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <FlexDirection />
      <JustifyContent />
      <FlexWrap></FlexWrap>
    </>
  );
}

export default App;
