import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
interface Props {
  name: string;
  handleClick: (name: string) => void;
  color: string;
}
export default function Navigate(props: Props) {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const li = useRef<any>();
  function hover() {
    setVisible(true);
    setWidth(li.current.getBoundingClientRect().width);
    setLeft(li.current.getBoundingClientRect().x);
  }
  function out() {
    setVisible(false);
  }
  return (
    <>
      <List onMouseEnter={hover} onMouseLeave={out} ref={li}>
        <NavbarLink
          to={props.name === "Mercury" ? "/" : props.name}
          onClick={() => {
            props.handleClick(props.name);
          }}
        >
          {props.name}
        </NavbarLink>
      </List>
      {visible && (
        <div
          style={{
            width: width,
            height: 4,
            backgroundColor: props.color,
            position: "absolute",
            top: 0,
            left: left,
          }}
        ></div>
      )}
    </>
  );
}
const List = styled.li`
  height: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavbarLink = styled(NavLink)`
  font-family: "League Spartan";
  color: rgba(255, 255, 255, 0.75);
  &:hover {
    color: #fff;
  }
`;
