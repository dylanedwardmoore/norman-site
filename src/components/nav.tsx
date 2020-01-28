import React, { FunctionComponent, useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

type MainNavbarProps = {
  setLeftSidebarOpen: (open: boolean) => void,
  leftSidebarIsOpen: boolean
}
const menuIsOpen: (isOpen: boolean) => string = (isOpen) => {
  return isOpen ? "is-active" : ""
}
const MainNavbar: React.FC<MainNavbarProps> = (props) => {
  return (
    <>
    <div className="navbar">
    <link rel="stylesheet" href="css/hamburgers.css" />
    <Navbar sticky="top" expand="md" fixed="top" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand onClick={() => {props.setLeftSidebarOpen(!props.leftSidebarIsOpen)}}>
      <div className={"hamburger hamburger--arrow " + menuIsOpen(props.leftSidebarIsOpen)}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      </Navbar.Brand>
      <div>
      </div>
    </Container>
    </Navbar>
    </div>
    </>
  );
}

export default MainNavbar;