import React, { Component } from 'react'
import './index.css'
import {
    Label,
} from 'reactstrap'

class TeamCard extends Component {
    render () {
        return (
            <div className="team-card-container">
                <div className="image-content">
                    <img alt="Avatar" />
                </div>
                <div className="resume-content">
                    <Label>- Lead Developer</Label>
                    <Label>Francis Lang</Label>
                    <Label>Nulla quis sem at elementum impperdiet, Duis sagittis ipsum. prasend mauris.</Label>
                </div>
            </div>
        )
    }
}

export default TeamCard