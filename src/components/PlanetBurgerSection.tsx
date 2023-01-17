import styled from "styled-components";
interface BurgerProps {
  isBurgerClicked?: boolean;
}
export const PlanetBurgerSection = styled.section<BurgerProps>`
  display: ${(props) => (props.isBurgerClicked ? "flex" : "none")};
  width: 80%;
  height: 100vh;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
