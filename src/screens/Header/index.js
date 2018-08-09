import React , { Component } from 'react'
import './index.css'
//ReactStrap
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
//Import 

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div className="header-container">
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/features">Features</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/partners">Partners</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/help">Help</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/forums">Forums</NavLink>
                  </NavItem>
                  
                </Nav>
              </Collapse>
              <Button>Download</Button>
              <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                      Lan-EN
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        English
                      </DropdownItem>
                      <DropdownItem>
                        Portueguese
                      </DropdownItem>
                      <DropdownItem>
                        Chinese
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
            </Navbar>
          </div>
        );
      }
}

export default Header