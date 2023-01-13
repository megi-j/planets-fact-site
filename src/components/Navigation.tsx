import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation(props: any) {
  return (
    <Nav>
      <ListUl>
        {props.info.map((item: any) => {
          return (
            <List>
              <NavbarLink
                to={item.name === "Mercury" ? "/" : item.name}
                onClick={() => {
                  props.handleClick(item.name);
                }}
              >
                {item.name}
              </NavbarLink>
            </List>
          );
        })}
      </ListUl>
    </Nav>
  );
}
const NavbarLink = styled(NavLink)`
  font-family: "League Spartan";
  color: rgba(255, 255, 255, 0.75);
  &:hover {
    color: #fff;
  }
`;

const Nav = styled.nav`
  width: 60%;
  height: 100%;
  margin-right: 32px;
`;
const ListUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const List = styled.li`
  height: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    border-top: 4px solid #419ebb;
  }
`;
