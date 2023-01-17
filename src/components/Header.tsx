import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyle";
import styled from "styled-components";
import burger from "../assets/icon-hamburger.svg";
interface Props {
  info: [];
  handleClick: (name: string) => void;
  burgerClicked: () => void;
}

export default function Header(props: Props) {
  return (
    <>
      <HeaderStyle>
        <Logo>THE PLANETS</Logo>
        <Navigation info={props.info} handleClick={props.handleClick} />
        <Burger src={burger} onClick={props.burgerClicked} />
      </HeaderStyle>

      <Outlet />
    </>
  );
}
const Burger = styled.img`
  display: none;
  @media (max-width: 450px) {
    display: block;
  }
`;
const Logo = styled.h2`
  font-size: 28px;
  color: #fff;
  font-weight: 400;
  letter-spacing: -1.05px;
  font-family: "Antonio";
  margin-left: 32px;
  @media (max-width: 450px) {
    margin-left: 0;
  }
`;
