import React from "react";
import Sidebar from "react-sidebar";
import Nav from 'react-bootstrap/Nav'

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
          <Nav.Link href="/">Active</Nav.Link>
          <Nav.Link href="/works">Works</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
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
          padding: "16px"
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