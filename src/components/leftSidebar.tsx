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
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open: boolean) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    const sidebarContent = (
      <>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </>
    
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
        open={this.props.open}
        onSetOpen={this.onSetSidebarOpen}
        styles={styles}
      >
        {this.props.children}
      </Sidebar>
    );
  }
}

export default App;