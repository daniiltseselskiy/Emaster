import React , { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
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
import USFlag from '../../assets/images/header/US.png'
import BRFlag from '../../assets/images/header/BR.png'
import CNFlag from '../../assets/images/header/CN.png'
const style = {
  backgroundColor: 'transparent'
}
const style1 = {
  
}
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          redirectDownload: false,
        };
      }
      setRedirectDownload = () => {
          this.setState ({
              redirectDownload: true
          })
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      changeLanguage = (locale) => {
        const {changeLanguage} = this.props
        changeLanguage(locale)
      }
      onClickDownload = () => {
          const { base } = this.props
          if (this.state.redirectDownload) {
          return <Redirect to={`${base}/download`} />
        }
      }
      onChangeLanguage = () => {
        const { base } = this.props
        const classname = this.props.location.pathname.split("/");
        return <Redirect to={`${base}/${classname[2]}`} />
      }
      render() {
        const { base, isHome } = this.props
        console.log("**********************************", base)
        return (
          <div className="header-container" style={isHome? style : style1}>
            {this.onClickDownload()}
            {this.onChangeLanguage()}
            <Navbar light expand="md">
              <NavbarBrand href="/">
                  <img src={LogoImage} alt="Logo Image" />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="" navbar>
                  <NavItem>
                    <NavLink href={`${base}/`}>HOME</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={`${base}/features`}>FEATURES</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={`${base}/about`}>ABOUT</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={`${base}/partners`}>PARTNERS</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={`${base}/help`}>HELP</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={`${base}/contact`}>CONTACT</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={`${base}/forums`}>FORUMS</NavLink>
                  </NavItem>
                  
                </Nav>
              </Collapse>
              <CButton Title="DOWNLOAD" onClick={this.setRedirectDownload}/>
              <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                      Lang-EN
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem >
                        <img src={USFlag}/>
                        <p onClick={() => this.changeLanguage('/en')}>English, USA</p>
                      </DropdownItem>
                      <DropdownItem >
                        <img src={BRFlag}/>
                        <p onClick={() => this.changeLanguage('/pt')}>Português do Brasil</p>
                      </DropdownItem>
                      <DropdownItem >
                        <img src={CNFlag}/>
                        <p onClick={() => this.changeLanguage('/cn')}>中文</p>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
            </Navbar>
          </div>
        );
      }
}

export default  withRouter(Header)