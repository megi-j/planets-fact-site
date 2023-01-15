import styled from "styled-components";
import Navigate from "./Navigate";
import { dataType } from "../types";
interface Props {
  info: [];
  // name: string;
  handleClick: (name: string) => void;
  // color: string;
}
export default function Navigation(props: Props) {
  return (
    <Nav>
      <ListUl>
        {props.info.map((item: dataType) => {
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

const Nav = styled.nav`
  width: 60%;
  height: 100%;
  margin-right: 32px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const ListUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
