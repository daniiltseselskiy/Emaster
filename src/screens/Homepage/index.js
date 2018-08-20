import React , { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Benefits from '../../components/Benefits'
import GameSupport from '../../components/GameSupport'
import JoinCompetition from '../../components/JoinCompetition'
import CButton from '../../components/CButton'
import TitleCompnent from '../../components/TitleComponent'
import './index.css'
import {
    Label,
    Button
} from 'reactstrap'
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'
import NextIcon from '../../assets/images/footer/next-icon.png'

class Home extends Component {

    render () {
        const {labels, content } = this.props
        const classname = this.props.location.pathname.split("/");
        var isHome = false
        if ( classname[2] == "") {
            isHome = true
        }
        console.log("Home page is ", classname, isHome)
        return (
            <div className={isHome? "home-container home" : "home-container"}>
                <div className="join-challenge-container">
                    <div className="join-challenge">
                        <TitleCompnent index={labels.joinIndex} title={labels.joinTitle} />
                        <div className="join-button-area">
                            <CButton Title="FEATURE"/>
                            <CButton Title="DOWNLOAD"/>
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
                        <img src={NextIcon} alt="Next Icon"/>
                        <div className="about-platform-textarea">
                            <Label className="text-mid-paragraph">{content.aboutPlatform.label}</Label>
                            <p className="text-paragraph">{content.aboutPlatform.content}</p>
                        </div>
                    </div>
                    <div className="howitworks-video">
                        <div className="video-container">
                            <ReactPlayer url='https://www.youtube.com/watch?v=uilkmUoXoLU' playing />
                            <div className="video-textarea">
                                <Label>See How It Works</Label>
                                <Label>Ut eniem ad minim veniam , quis nostrud exercitation</Label>
                                <Label>ullamco laboris nisi ut aliquip exea</Label>
                            </div>
                        </div>
                    </div>
                </div>
                <GameSupport labels={labels}/>
                <Benefits labels={labels} benefits={content.benefits}/>
                <div className="working-us-container">
                    <div className="support-textarea">
                        <TitleCompnent index={labels.workingIndex} title={labels.workingTitle} />
                        {/* <Label>See All</Label> */}
                    </div>
                </div>
                <JoinCompetition joinContents={content.joinContents}/>
            </div>
        )
    }
}
export default withRouter(Home);
