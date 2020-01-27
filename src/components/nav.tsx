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
    <link rel="stylesheet" href="css/hamburgers.css" />
    <Navbar sticky="top" expand="md" fixed="top">
    <Container>
      <Navbar.Brand onClick={() => {props.setLeftSidebarOpen(!props.leftSidebarIsOpen)}}>
      <div className={"hamburger hamburger--arrow " + menuIsOpen(props.leftSidebarIsOpen)}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      </Navbar.Brand>
    </Container>
    </Navbar>
    </>
  );
}

export default MainNavbar;