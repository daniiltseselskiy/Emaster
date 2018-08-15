import React, { Component } from 'react'
import CButton from '../CButton'
import './index.css'
import '../../screens/index.css'
import {
    Label
} from 'reactstrap'

class JoinCompetition extends Component {
    render () {
        return (
            <div className="join-competition-container">
                <div className="competition-textarea">
                    <Label className="text-title">Join the Competition</Label>
                    <p className="text-paragraph">LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume LoremIpsume</p>
                </div>
                <div className="competition-buttonarea">
                    <CButton Title="DOWNLOAD" />
                </div>
            </div>
        )
    }
}

export default JoinCompetition