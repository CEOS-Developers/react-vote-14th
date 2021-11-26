import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Navbar fixed="top" bg="light">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src="/images/logo.png" style={{ width: "150px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!isLoggedIn ? (
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <h2 className="Login">Login/Signup</h2>
            </Link>
          ) : (
            <div>Logged In</div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
