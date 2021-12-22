import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = styled.section`
  display: grid;
  width: 20%;

  grid-template-rows: 1.5fr 7fr 1.5fr;

  grid-template-areas:
    'logo'
    'menus'
    'signout';
`;

export const StyledLink = styled(Link)`
  width: 100%;

  display: flex;
  align-items: center;

  color: black;
  text-decoration: none;
`;

export const Logo = styled.img`
  grid-area: logo;
  width: 180px;

  align-self: center;
  justify-self: center;

  object-fit: contain;
`;

export const Menus = styled.menu`
  grid-area: menus;

  padding: 0;

  display: flex;
  flex-direction: column;
`;

export const Group = styled.section`
  height: 25%;
  margin-top: 5%;
  margin-bottom: 20%;
`;

export const GroupName = styled.section`
  width: 70%;
  border-bottom: 1px solid #6e6e6e;
  margin: 0 14% 5% 16%;
  padding-bottom: 2.5%;

  font-size: 24px;
  font-weight: 400;
`;

export const Menu = styled.span`
  font-size: 20px;

  margin: 5% 0 5% 18%;
  color: #6e6e6e;

  &:hover {
    color: #5d5fe7;
  }
`;

export const SignOut = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #c3c3c3;
  font-size: 16px;
`;
