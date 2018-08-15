import React, { Component } from 'react'
import JoinCompetition from '../../components/JoinCompetition'
import './index.css'
import '../index.css'
import {
    Label,

} from 'reactstrap'

class Help extends Component {
    render () {
        return (
            <div className="help-container">
                <div className="text-content-t">
                    <Label className="text-t"> Basic Page</Label>
                </div>
                <div className="text-content-h">
                    <Label>.................................................</Label>
                </div>
                <div className="text-content-m">
                    <Label>..................................................</Label>
                    <Label>..................................................</Label>
                </div>
                <div className="text-content-e">
                    <Label>........................................</Label>
                </div>
                <div className="image-content-h">
                    <img alt="Image"/>
                </div>
                <div className="text-content-be">
                    <Label>........................</Label>
                </div>
                <JoinCompetition />
            </div>
        )
    }
}

export default Help