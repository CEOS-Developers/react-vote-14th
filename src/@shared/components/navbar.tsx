import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <React.Fragment>
    <Link to="/">홈</Link>
    <Link to="/vote">투표하기</Link>
    <Link to="/result">결과보기</Link>
  </React.Fragment>
);

export default Navbar;
