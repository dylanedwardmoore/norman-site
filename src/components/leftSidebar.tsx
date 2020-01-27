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
        <nav id="navbar-example3" className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link" href="#item-1">Item 1</a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>
              <a className="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>
            </nav>
            <a className="nav-link" href="#item-2">Item2</a>
            <a className="nav-link" href="#item-3">Item3</a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
              <a className="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
            </nav>
          </nav>
        </nav>
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