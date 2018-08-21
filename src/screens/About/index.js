import React, { Component } from 'react'
import Gallery from '../../components/Gallery'
import BottomCard from '../../components/BottomCard'
import JoinCompetition from '../../components/JoinCompetition'
import Support3Text from '../../components/Support3Text'
import ImageTitleComponent from '../../components/ImageTitleComponent'
import TitleComponent from '../../components/TitleComponent';
import './index.css'
import '../index.css'
import {
    Label,
} from 'reactstrap'
import HeadQuarterImage from '../../assets/images/about/headquarter.png'
import HelpCompanyImage from '../../assets/images/about/help-company.png'
import NextArrow from '../../assets/images/about/arrow-next.png'
import PreviousArrow from '../../assets/images/about/arrow-previous.png'

class About extends Component {
    render () {
        const {labels, content} = this.props
        return (
            <div className="about-container">
                <div className="text-content-t">
                    <Label className="text-title">{labels.aboutTitle}</Label>
                </div>
                <Support3Text index={labels.refinedIndex} title={labels.refinedTitle} description={content.gamingRefined} download={false}/>
                {/* <ImageTitleComponent  label={content.gamingRefined.content4} image={HeadQuarterImage} reverse={false}/> */}
                <div className="meet-team-container">
                    <div className="meet-team-content">
                        <div className="left-team-content">
                            <div className="team-member-card">
                                <Gallery uid="1" />
                            </div>
                            <div className="team-arrow">
                                <img src={PreviousArrow} /> 
                                <img src={NextArrow} />
                            </div>
                        </div>
                        <div className="right-team-content">
                            <TitleComponent  index={labels.meetIndex} title={labels.meetTitle}/>
                            <BottomCard index={labels.joinTeamIndex} link={labels.joinTeamLink} investor={false}/>
                        </div>
                    </div>
                </div>
                <div className="mission-container">
                    <Support3Text index={labels.missionIndex} title={labels.missionTitle} description={content.ourMission} />
                </div>
                <div className="help-company-container">
                    <div className="help-company-content">
                        <TitleComponent  index={labels.helpusIndex} title={labels.helpusTitle}/>
                        <div className="image-card-container" >
                            <img src={HelpCompanyImage} />
                            <BottomCard index={labels.investorIndex} link={labels.investorLink} investor={true}/>
                        </div>
                    </div>
                </div>
                <JoinCompetition joinContents={content.joinContents}/>
            </div>
        )
    }
}

export default About