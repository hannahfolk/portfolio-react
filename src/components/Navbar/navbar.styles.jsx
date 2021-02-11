import styled from "styled-components";
import { Link } from "react-scroll";
import { Menu } from "semantic-ui-react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export const Nav = styled(Menu)`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #252b34 !important;
  justify-content: center;
  display: flex;
  flex-direction: row;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  color: white;
  font-size: 14px;
  padding: 10px 0 10px 0;
  margin-left: 0;
  margin-right: 0;
  width: 12%;
  min-width: 5em;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }
`;

export const LinkIcon = styled(Icon)`
  margin-bottom: 10px;
`;
