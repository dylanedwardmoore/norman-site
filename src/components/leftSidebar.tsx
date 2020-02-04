import React from "react";
import Sidebar from "react-sidebar";
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

type SidebarState = {
    sidebarOpen: boolean
  }

export type LeftSidebarProps = {
    open: boolean
} 



class App extends React.Component<LeftSidebarProps, SidebarState> {
    componentWillMount() {
    this.setState({
      sidebarOpen: true
    });
    // this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  // onSetSidebarOpen(open: boolean) {
  //   this.setState({ sidebarOpen: open });
  // }

  render() {
    const sidebarContent = (
      <div className="sidebar">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link ><Link to="/">Active</Link></Nav.Link>
          <Nav.Link ><Link to="/works">Works</Link></Nav.Link>
          <Nav.Link ><Link to="/about">About</Link></Nav.Link>
        </Nav>
      </div>
      )

      const styles = {
        contentHeaderMenuLink: {
          textDecoration: "none",
          color: "white",
          padding: 8
        },
        content: {
          padding: "1px"
        }
      };

    return (
      <Sidebar
        sidebar={sidebarContent}
        docked={this.props.open}
        styles={styles}>
        {this.props.children}
      </Sidebar>
    );
  }
}

export default App;