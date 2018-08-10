import React, { Component } from 'react'
import CInput from '../../components/CInput'
import JoinCompetition from '../../components/JoinCompetition'
import './index.css'
import {
    Label,
    Button,
} from 'reactstrap'
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'

class Contact extends Component {
    render () {
        return (
            <div className="contact-container">
                <Label>Contact Us</Label>
                <div className="contact-content">
                    <div className="left-contact">
                        <Label>- Contact with Us </Label>
                        <Label>eMasters</Label>
                        <Label>1014 Capp St, San Francisco CA 94110</Label>
                        <div className="social-link-c">
                            <a href="https://www.instagram.com" target="blank"><img src={InstagramIcon} alt="Instagram" /></a>
                            <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                            <a href="https://www.instagram.com" target="blank"><img src={InstagramIcon} alt="Instagram" /></a>
                            <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                        </div>
                    </div>
                    <div className="right-contact">
                        <CInput />
                        <CInput />
                        <CInput />
                        <CInput />
                        <CInput />
                        <Button>Contact Us</Button>
                    </div>
                </div>    
                <JoinCompetition />            
            </div>
        )
    }
}

export default Contact