import React, { FunctionComponent, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  generatePath} from "react-router-dom";
import Home from "./pages/home";
import Works from './pages/works';
import About from './pages/about';
import LeftSidebar from './components/leftSidebar';
import Nav from './components/nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import BetterLeftSidebar from './components/betterLeftSidebar'
import './css/hamburgers.css';

export const SinglePageApplication: React.FC = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);

  return (
    <>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <Router>
      <Nav setLeftSidebarOpen={setLeftSidebarOpen} leftSidebarIsOpen={leftSidebarOpen}></Nav>
      <LeftSidebar open={leftSidebarOpen}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
        </Switch>
        </LeftSidebar>
    </Router>
    </>
  );
}
