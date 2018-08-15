import React , { Component } from 'react'
import Benefits from '../../components/Benefits'
import GameSupport from '../../components/GameSupport'
import JoinCompetition from '../../components/JoinCompetition'
import CButton from '../../components/CButton'
import './index.css'
import {
    Label,
    Button
} from 'reactstrap'
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'

class Home extends Component {

    render () {
        return (
            <div className="home-container">
                <div className="join-challenge-container">
                    <div className="join-challenge">
                        <Label>- Join the challenge</Label>
                        <Label>Play. Improve. Win!</Label>
                        <div className="join-button-area">
                            <img alt="Features"/>
                            {/* <img alt="Download"/> */}
                            <CButton Title="Download"/>
                        </div>
                    </div>
                    <div className="join-social">
                        <a href="https://www.instagram.com" target="blank"><img src={InstagramIcon} alt="Instagram" /></a>
                        <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                        <a href="https://www.instagram.com" target="blank"><img src={InstagramIcon} alt="Instagram" /></a>
                        <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                    </div>
                </div>
                <div className="about-platform-container">
                    <div className="about-platform">
                        <img alt="Next Icon"/>
                        <div className="about-platform-textarea">
                            <Label>ABOUT OUR PLATFORM</Label>
                            <Label>Lorem ipsum dolor sit amet, consectuetur adipising slet, sed do eiusmdo tpor indiciudnt ut labore et dolore </Label>
                        </div>
                    </div>
                    <div className="howitworks-video">
                        <div>
                            {/* <ReactPlayer url='https://www.youtube.com/watch?v=MhkGQAoc7bc' playing /> */}
                        </div>
                        <div className="video-textarea">
                            <Label>See How It Works</Label>
                            <Label>Ut eniem ad minim veniam , quis nostrud exercitation</Label>
                            <Label>ullamco laboris nisi ut aliquip exea</Label>
                        </div>
                    </div>
                </div>
                <GameSupport />
                <Benefits />
                <div className="working-us-container">
                    <div className="support-textarea">
                        <Label>- Working With Us</Label>
                        <Label>Our Customers</Label>
                        <Label>See All</Label>
                    </div>
                </div>
                <JoinCompetition />
            </div>
        )
    }
}

export default Home