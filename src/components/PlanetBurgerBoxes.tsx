import styled from "styled-components";
import arrow from "../assets/icon-chevron.svg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function PlanetBurgerBoxes(props: any) {
  let navigate = useNavigate();
  return (
    <>
      <PlanetBurgerBox>
        <PlanetColorBox />
        <PlanetName
          onClick={() => {
            props.handleClick(props.name);
            props.burgerClicked();
            navigate(props.name === "Mercury" ? "/" : `/${props.name}`);
          }}
        >
          {props.name}
          {/* <NavLink
            to={props.name === "Mercury" ? "/" : props.name}
            onClick={() => {
              props.handleClick(props.name);
              props.burgerClicked();
            }}
          >
            {props.name}
          </NavLink> */}
        </PlanetName>
        <img src={arrow} alt="arrow" />
      </PlanetBurgerBox>
      {props.isBurgerClicked && <Outlet />}
    </>
  );
}

const PlanetBurgerBox = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const PlanetColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;
const PlanetName = styled.li`
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: "League Spartan";
`;
