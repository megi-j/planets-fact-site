import styled from "styled-components";
interface PlanetProps {
  isBurgerClicked?: boolean;
}
export const PlanetSection = styled.section<PlanetProps>`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 126px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    margin: 0;
    display: ${(props) => (props.isBurgerClicked ? "none" : "flex")};
  }
`;
