import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navigate from "./Navigate";
export default function Navigation(props: any) {
  return (
    <Nav>
      <ListUl>
        {props.info.map((item: any) => {
          return (
            <Navigate
              name={item.name}
              handleClick={props.handleClick}
              color={item.color}
            />
          );
        })}
      </ListUl>
    </Nav>
  );
}
const NavbarLink = styled(NavLink)`
  font-family: "League Spartan";
  color: rgba(255, 255, 255, 0.75);
  &:hover {
    color: #fff;
  }
`;

const Nav = styled.nav`
  width: 60%;
  height: 100%;
  margin-right: 32px;
`;
const ListUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
interface Props {
  clickedPlanet?: any;
}
// background: ${(props) =>
//   props.selectButton == props.name ? "#419EBB" : "none"};

// const List = styled.li`
//   height: 100%;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   font-weight: 700;
//   color: rgba(255, 255, 255, 0.75);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// &:hover {
//   border-top: ${(props) =>
//     props.clickedPlanet === "Mars" ? "4px solid red" : "4px solid yellow"}
