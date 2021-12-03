import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = styled.section`
  width: 20%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid #e2e2e2;
`;

export const ItemsWrapper = styled.section`
  height: 45%;
  width: 100%;

  margin-top: 10%;
`;

export const StyledLink = styled(Link)`
  height: 25%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: black;
`;

export const ItemWrapper = styled.section`
  height: 25%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: black;
`;

export const Logo = styled.img`
  width: 150px;
  height: 30px;

  object-fit: contain;
`;

export const Text = styled.h3`
  display: flex;
`;
