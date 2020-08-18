import styled from "styled-components";

const size = { mobileL: "425px", tablet: "768px", laptop: "1024px" };

export const device = {
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};
export const FlexContainer = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
`;

export const Flexitem = styled.div`
  length: 5vh;
  width: ${(props) => (props.width ? props.width : "15vw")};
  background-color: black;
  font-size: inherit;
  color: white;
  padding: 0.5em;
  margin: 0.2em;
  align-items: center;
  text-align: center;
`;
export const FlexitemContainer = styled(FlexContainer)`
  background-color: yellow;
  font-size: 3vw;
  border: solid 2px black;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
`;

export const Code = styled.div`
  background-color: greenyellow;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5vw;
`;
