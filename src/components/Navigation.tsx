import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation(props: any) {
  return (
    <nav style={{ width: "60%" }}>
      <ListUl>
        {props.info.map((item: any) => {
          return (
            <List>
              <NavLink
                style={{ color: "#fff" }}
                to={item.name === "Mercury" ? "/" : item.name}
                onClick={() => {
                  props.handleClick(item.name);
                }}
              >
                {item.name}
              </NavLink>
            </List>
          );
        })}
      </ListUl>
    </nav>
  );
}
const ListUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;
const List = styled.li`
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
`;
