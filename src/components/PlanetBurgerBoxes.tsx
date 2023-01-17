import styled from "styled-components";
import arrow from "../assets/icon-chevron.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { PlanetBurgerBoxesType } from "../types";

export default function PlanetBurgerBoxes(props: PlanetBurgerBoxesType) {
  let navigate = useNavigate();
  return (
    <>
      <PlanetBurgerBox>
        <PlanetColorBox color={props.color} />
        <PlanetName
          onClick={() => {
            props.handleClick(props.name);
            props.burgerClicked();
            navigate(props.name === "Mercury" ? "/" : `/${props.name}`);
          }}
        >
          {props.name}
        </PlanetName>
        <img src={arrow} alt="arrow" />
      </PlanetBurgerBox>
      {props.isBurgerClicked && <Outlet />}
    </>
  );
}
interface ColorProps {
  color: string;
}
const PlanetBurgerBox = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const PlanetColorBox = styled.div<ColorProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PlanetName = styled.li`
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: "League Spartan";
`;
