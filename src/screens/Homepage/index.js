import React , { Component } from 'react'
import FeatureComponent from '../../components/FeatureComponent'
import './index.css'
import {
    Label,
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
                            <img alt="Download"/>
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
                            <ReactPlayer url='https://www.youtube.com/watch?v=MhkGQAoc7bc' playing />
                        </div>
                        <div className="video-textarea">
                            <Label>See How It Works</Label>
                            <Label>Ut eniem ad minim veniam , quis nostrud exercitation</Label>
                            <Label>ullamco laboris nisi ut aliquip exea</Label>
                        </div>
                    </div>
                </div>
                <div className="game-support-container">
                    <div className="support-textarea">
                        <Label>- More coming soon</Label>
                        <Label>Games We support</Label>
                    </div>
                    <div className="game-support-addgame">
                        
                    </div>
                    <div className="game-panel">
                    </div>
                </div>
                <div className="why-us-container">
                    <div className="support-textarea">
                        <Label>- Why Us</Label>
                        <Label>Our Benefits & Advantage</Label>
                    </div>
                    <div className="support-componentarea">
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                    </div>
                </div>
                <div className="support-component-container">
                    <div className="left-componentarea">
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                    </div>
                    <div className="support-componentarea">
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                    </div>
                </div>
                <div className="working-us-container">
                    <div className="support-textarea">
                        <Label>- Working With Us</Label>
                        <Label>Our Customers</Label>
                        <Label>See All</Label>
                    </div>
                </div>
                <div className="join-competition-container">
                    <div className="competition-textarea">
                        <Label>Join the Competition</Label>
                        <Label>LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume</Label>
                    </div>
                    <img alt="Download Button" />
                </div>
            </div>
        )
    }
}

export default Home