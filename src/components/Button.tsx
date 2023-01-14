import styled from "styled-components";
interface Props {
  selectButton: string;
  name: string;
}
export const Button = styled.button<Props>`
  width: 100%;
  height: 48px;
  margin-top: 16px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  letter-spacing: 2.57143px;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(216, 216, 216, 0.2);
  }
  background: ${(props) =>
    props.selectButton == props.name ? "#419EBB" : "none"};
`;
