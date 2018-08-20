import React, { Component } from 'react'
import CButton from '../CButton'
import './index.css'
import '../../screens/index.css'
import {
    Label
} from 'reactstrap'

class JoinCompetition extends Component {
    render () {
        const { joinContents } = this.props
        return (
            <div className="join-competition-container">
                <div className="competition-textarea">
                    <Label className="text-title">{joinContents.label}</Label>
                    <p className="text-paragraph">{joinContents.content}</p>
                </div>
                <div className="competition-buttonarea">
                    <CButton Title="DOWNLOAD" />
                </div>
            </div>
        )
    }
}

export default JoinCompetition