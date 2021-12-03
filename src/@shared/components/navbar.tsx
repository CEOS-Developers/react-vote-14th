import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { FaVoteYea } from 'react-icons/fa';
import { BsFillFileBarGraphFill } from 'react-icons/bs';
import { Button } from '@nextui-org/react';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import useUser from '../hooks/useUser';

const Navbar = () => {
  const { logOut, getUser } = useUser();
  const userId = JSON.stringify(getUser().id)?.replace(/\"/gi, '');

  return (
    <>
      <NavbarContainer>
        <StyledLink to="/">
          <AiFillHome />
        </StyledLink>
        <StyledLink to="/vote">
          <FaVoteYea />
        </StyledLink>
        <StyledLink to="/result">
          <BsFillFileBarGraphFill />
        </StyledLink>
      </NavbarContainer>
      <Header>
        <UserInfo>🥰 {userId} </UserInfo>
        <RiLogoutBoxRFill
          onClick={logOut}
          style={{ color: '#fc5c51', fontSize: '4vmin' }}
        />
      </Header>
    </>
  );
};

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

const UserInfo = styled.div`
  margin: 0 1vmin;
`;

const Header = styled.div`
  position: absolute;
  top: 14vmin;
  right: 10vmin;
  width: 100%;
  display: flex;
  font-size: 3vmin;
  justify-content: right;
  align-items: center;
`;

export default Navbar;
