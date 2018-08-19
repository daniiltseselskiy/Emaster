import React, { Component } from 'react'
import CInput from '../../components/CInput'
import JoinCompetition from '../../components/JoinCompetition'
import TitleComponent from '../../components/TitleComponent'
import './index.css'
import '../index.css'
import {
    Label,
    Button,
} from 'reactstrap'
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'
import DiscordIcon from '../../assets/images/footer/discord-icon.png'
import { labels } from '../../constants/labels'
import CButton from '../../components/CButton';
class Contact extends Component {
    render () {
        return (
            <div className="contact-container">
                <div className="text-content-t">
                    <Label className="text-title">{labels.contactTitle}</Label>
                </div>
                <div className="contact-content">
                    <div className="left-contact">
                        <TitleComponent index={labels.contactIndex} title={labels.contactTitle1} />
                        <p className="text-mid-paragraph">{labels.contactTitle2}</p>
                        <div className="social-mark-c">
                            <a href="https://www.instagram.com" target="blank"><img src={DiscordIcon} alt="Instagram" /></a>
                            <a href="https://www.facebook.com" target="blank"><img src={InstagramIcon} alt="Facebook" /></a>
                            <a href="https://www.instagram.com" target="blank"><img src={FacebookIcon} alt="Instagram" /></a>
                            <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                        </div>
                    </div>
                    <div className="right-contact">
                        <CInput placeholder="Name" label="Name*"/>
                        <CInput placeholder="Email" label="Email*"/>
                        <CInput placeholder="Company" />
                        <CInput placeholder="Subject" />
                        <CInput placeholder="Message" />
                        <CButton Title={labels.contactTitle}/>
                    </div>
                </div>    
                <JoinCompetition />            
            </div>
        )
    }
}

export default Contact