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
  width: 100%;
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
//styling Logo
const Logo = styled.div`
  background-color: black;
  color: white;
  padding: 0.3vw;
  font-size: 2vw;
  text-align: center;

  @media ${device.tablet} {
    max-width: 760px;
  }
`;
const Logospan = styled.span`
  @media ${device.tablet} {
    max-width: 760px;
  }
`;
const Nav = styled.nav`
  margin: 0;
  padding: none;
  display: flex;
  width: 100%;
  background-color: pink;
`;
const Navbar = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Navitem = styled.li`
  margin: 20px;
  font-weight: 550;
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
          <Logospan>FlexBox Cheatsheet</Logospan>
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
