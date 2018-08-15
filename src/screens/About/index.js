import React, { Component } from 'react'
import TeamCard from '../../components/TeamCard'
import BottomCard from '../../components/BottomCard'
import JoinCompetition from '../../components/JoinCompetition'
import Support3Text from '../../components/Support3Text'
import Gallery from '../../components/Gallery'
import './index.css'
import {
    Label,
} from 'reactstrap'

class About extends Component {
    render () {
        return (
            <div className="about-container">
                <Label>About eMasters </Label>
                <Support3Text />
                <div className="meet-team-container">
                    <div className="meet-team-content">
                        <div className="left-team-content">
                            <div className="team-member-card">
                                <TeamCard />
                            </div>
                            <div className="team-arrow">
            
                            </div>
                        </div>
                        <div className="right-team-content">
                            <Label>- Meet The Team </Label>
                            <Label>The People Behind eMasters</Label>
                        </div>
                    </div>
                    {/* <BottomCard /> */}
                </div>
                <div className="online-gaming-container">
                    <div className="support-textarea">
                        <Label>- Our Mission</Label>
                        <Label>Removing Tournament Complexity</Label>
                    </div>
                    <div className="support-textarea-m">
                        <Label>Non arcu risus quis varius , Viverra aliquet eget sit amte telus. Adiposcing at in tellus inteer</Label>
                        <Label>Mauris site amet massa vitae tortor condimentu lacina</Label>
                    </div>
                </div>
                <div className="help-company-container">
                    <Label>- Who`s Helping Us?</Label>
                    <Label>Our Customers And Partners</Label>
                    <div className="help-company-content">
                        {/* <BottomCard /> */}
                    </div>
                </div>
                <JoinCompetition />
            </div>
        )
    }
}

export default About