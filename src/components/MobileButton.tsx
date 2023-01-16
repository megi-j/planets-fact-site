import styled from "styled-components";

interface Props {
  selectButton: string;
  name: string;
}
export const MobileButton = styled.button<Props>`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 9px;
  font-family: "League Spartan";
  height: 100%;
  border: none;
  background: none;
  border-bottom: ${(props) =>
    props.selectButton == props.name ? "4px solid #419EBB" : "none"};
`;
