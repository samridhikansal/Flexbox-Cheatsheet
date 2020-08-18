import React from "react";

//import styled componets
import styled from "styled-components";

import { GoGrabber } from "react-icons/go";
import { device } from "./../styled/Flex";

//styling the header container
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`;
//styling Logo
const Logo = styled.div`
  background-color: black;
  color: white;
  padding: 0.3em;
  @media ${device.mobileL} {
    max-width: 400px;
  }
`;
const Nav = styled.nav`
  margin: 0;
  padding: none;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: pink;
`;
const Navbar = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Navitem = styled.li`
  margin: 0;
  padding: 0.3em;
  width: 50px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <span>FlexBox Cheatsheet</span>
        </Logo>
        <Nav>
          <Navbar>
            <Navitem>Home</Navitem>
            <Navitem>Flexbox Orientation</Navitem>
            <Navitem>Flexibility</Navitem>
          </Navbar>
        </Nav>
      </HeaderContainer>{" "}
    </>
  );
};
export default Header;
