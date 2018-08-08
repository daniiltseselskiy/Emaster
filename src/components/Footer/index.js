import React, {Component } from 'react'
import './index.css'
import {
    Button,
    Input,
    Label
} from 'reactstrap'
import { Link } from 'react-router-dom'
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'

class Footer extends Component {
    render () {
        return (
            <div className="footer-container">
                <div className="left-footer">
                    <img alt="Footer Logo" />
                    <div className="social-mark">
                        <a href="https://www.instagram.com" target="blank"><img src={InstagramIcon} alt="Instagram" /></a>
                        <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                        <a href="https://www.instagram.com" target="blank"><img src={InstagramIcon} alt="Instagram" /></a>
                        <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                    </div>
                </div>
                <div className="right-footer">
                    <div className="top-right-footer">
                        <div className="link-area">
                            <div className="link-area-label">
                                <Link to="/features"><p>Features</p></Link>
                                <Link to="/about"><p>About</p></Link>
                                <Link to="/partners"><p>Partners</p></Link>
                                <Link to="/contact"><p>Contact</p></Link>
                            </div>
                            <div className="link-area-label">
                                <Link to="/help"><p>Help</p></Link>
                                <Link to="/forums"><p>Forums</p></Link>
                                <Link to="/careers"><p>Careers</p></Link>
                            </div>
                            <div className="link-area-company">
                                <h1>eMasters</h1>
                                <p>1014 Capp St, San Francisco</p>
                                <p>CA 94110</p>
                            </div>
                        </div>
                        <div className="mail-area">
                            <Input type="email" placeholder="Join our mailing list"/>
                            <img alt="Next Icon" />
                        </div>
                    </div>
                    <div className="bottom-right-footer">
                        <Link to="#"><p>Privacy Policy</p></Link>
                        <Link to="#"><p>Terms & Conditions</p></Link>
                        <Label>Copyright 2018 eMasters</Label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer