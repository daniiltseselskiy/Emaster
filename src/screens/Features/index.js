import React , { Component } from 'react'
import GameSupport from '../../components/GameSupport'
import JoinCompetition from '../../components/JoinCompetition'
import Support3Text from '../../components/Support3Text'
import './index.css'

import {
    Label,
    Button,
} from 'reactstrap'


class Features extends Component {
    render () {
        
        return (
            <div className="features-container">
                <Label>Features</Label>
                <Support3Text />
                <GameSupport />
                <div className="tournaments-leagues-container">
                    <div className="image-content">
                        <img alt="Tournament" />
                    </div>
                    <div className="title-content">
                        <Label>Tournaments of leagues</Label>
                        <Label>Habitant morbi ......................</Label>
                    </div>
                </div>
                <div className="tournaments-leagues-container">
                    <div className="title-content">
                        <Label>Tournaments of leagues</Label>
                        <Label>Habitant morbi ......................</Label>
                    </div>
                    <div className="image-content">
                        <img alt="Tournament" />
                    </div>
                </div>
                <div className="tournaments-leagues-container">
                    <div className="image-content">
                        <img alt="Tournament" />
                    </div>
                    <div className="title-content">
                        <Label>Tournaments of leagues</Label>
                        <Label>Habitant morbi ......................</Label>
                    </div>
                </div>
                <JoinCompetition />
            </div>
        )
    }
}

export default Features