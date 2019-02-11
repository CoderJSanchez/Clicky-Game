import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class MainNav extends Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Clicky</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <p>Score: {this.state.score}</p>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav;
