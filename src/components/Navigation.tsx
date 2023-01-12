import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav style={{ width: "60%" }}>
      <ListUl>
        <List>
          <NavLink style={{ color: "#fff" }} to="/">
            mercury
          </NavLink>
        </List>
        <List>
          <NavLink style={{ color: "#fff" }} to="/venus">
            venus
          </NavLink>
        </List>
        <List>
          <NavLink style={{ color: "#fff" }} to="/earth">
            earth
          </NavLink>
        </List>
        <List>
          <NavLink style={{ color: "#fff" }} to="/mars">
            mars
          </NavLink>
        </List>
        <List>
          <NavLink style={{ color: "#fff" }} to="/jupiter">
            jupiter
          </NavLink>
        </List>
        <List>
          <NavLink style={{ color: "#fff" }} to="/saturn">
            saturn
          </NavLink>
        </List>
        <List>
          <NavLink style={{ color: "#fff" }} to="/uranus">
            uranus
          </NavLink>
        </List>
        <List>
          <NavLink style={{ color: "#fff" }} to="/neptune">
            neptune
          </NavLink>
        </List>
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
