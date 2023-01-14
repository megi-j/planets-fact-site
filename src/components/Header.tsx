import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyle";
import styled from "styled-components";

interface Props {
  info: any;
  handleClick: (name: string) => void;
  // clickedPlanet: string;
}

export default function Header(props: Props) {
  return (
    <>
      <HeaderStyle>
        <Logo>THE PLANETS</Logo>
        <Navigation
          info={props.info}
          handleClick={props.handleClick}
          // clickedPlanet={props.clickedPlanet}
        />
      </HeaderStyle>

      <Outlet />
    </>
  );
}
const Logo = styled.h2`
  font-size: 28px;
  color: #fff;
  font-weight: 400;
  letter-spacing: -1.05px;
  font-family: "Antonio";
  margin-left: 32px;
`;
