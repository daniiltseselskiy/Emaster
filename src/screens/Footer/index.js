import React, {Component } from 'react'
import NInput from '../../components/NInput'
import './index.css'
import {
    Button,
    Input,
    Label
} from 'reactstrap'
import { Link } from 'react-router-dom'
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'
import DiscordIcon from '../../assets/images/footer/discord-icon.png'
import LogoImage from '../../assets/images/footer/logo.png'
import NextIcon from '../../assets/images/footer/next-icon.png'

class Footer extends Component {
    render () {
        console.log("*************************", navigator.platform)
        const {base} = this.props
        return (
            <div className="footer-container">
                <div className="left-footer">
                    <img src={LogoImage} alt="Footer Logo" />
                    <div className="social-mark">
                        <a href="https://www.instagram.com" target="blank"><img src={DiscordIcon} alt="Instagram" /></a>
                        <a href="https://www.facebook.com" target="blank"><img src={InstagramIcon} alt="Facebook" /></a>
                        <a href="https://www.instagram.com" target="blank"><img src={FacebookIcon} alt="Instagram" /></a>
                        <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                    </div>
                </div>
                <div className="right-footer">
                    <div className="top-right-footer">
                        <div className="link-area">
                            <div className="link-area-label">
                                <Link to={`${base}/features`}><p>Features</p></Link>
                                <Link to={`${base}/about`}><p>About</p></Link>
                                <Link to={`${base}/partners`}><p>Partners</p></Link>
                                <Link to={`${base}/contact`}><p>Contact</p></Link>
                            </div>
                            <div className="link-area-label">
                                <Link to={`${base}/help`}><p>Help</p></Link>
                                <Link to={`${base}/forums`}><p>Forums</p></Link>
                                <a href="https://angel.co/emasters/jobs" target="blank"><p>Careers</p></a>
                            </div>
                            <div className="link-area-company">
                                <h1>eMasters</h1>
                                <p>1014 Capp St, San Francisco</p>
                                <p>CA 94110</p>
                            </div>
                        </div>
                        <div className="mail-area">
                            <NInput placeholder="Join our mailing list"/>
                            <img src={NextIcon} alt="Next Icon" />
                        </div>
                    </div>
                    <div className="bottom-right-footer">
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms & Conditions</Link>
                        <Label>Copyright 2018 eMasters</Label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer