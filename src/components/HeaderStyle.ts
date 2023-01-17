import styled from "styled-components";
export const HeaderStyle = styled.header`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media (max-width: 768px) {
    height: 159px;
    flex-direction: column;
    justify-content: space-around;
  }
  @media (max-width: 450px) {
    height: 68px;
    flex-direction: row;
  }
`;
