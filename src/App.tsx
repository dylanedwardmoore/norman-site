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
import './css/sidebar.css';
import './css/navbar.css';
import './css/burgerStyles.css';
import Example from "./components/betterLeftSidebar";


export const SinglePageApplication: React.FC = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);

  return (
    <div>
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
    </div>
  );
}
