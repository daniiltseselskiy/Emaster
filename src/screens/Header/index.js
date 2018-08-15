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
import CButton from '../../components/CButton'
import LogoImage from '../../assets/images/emasters_white.png'

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
            <Navbar light expand="md">
              <NavbarBrand href="/">
                  <img src={LogoImage} alt="Logo Image" />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="" navbar>
                  <NavItem>
                    <NavLink href="/">HOME</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/features">FEATURES</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about">ABOUT</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/partners">PARTNERS</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/help">HELP</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact">CONTACT</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/forums">FORUMS</NavLink>
                  </NavItem>
                  
                </Nav>
              </Collapse>
              <CButton Title="DOWNLOAD" />
              <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                      Lang-EN
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