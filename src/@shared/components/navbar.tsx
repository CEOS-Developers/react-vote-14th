import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { FaVoteYea } from 'react-icons/fa';
import { BsFillFileBarGraphFill } from 'react-icons/bs';

const Navbar = () => (
  <NavbarContainer>
    <StyledLink to="/">
      <AiFillHome />
    </StyledLink>
    <StyledLink to="/vote">
      {' '}
      <FaVoteYea />
    </StyledLink>
    <StyledLink to="/result">
      <BsFillFileBarGraphFill />
    </StyledLink>
  </NavbarContainer>
);

const NavbarContainer = styled.div`
  position: absolute;
  top: 5vmin;
  font-size: 5vmin;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  margin: 0 10vmin;
`;

export default Navbar;
