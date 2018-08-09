import React, { Component } from 'react'
import './index.css'
import {
    Label
} from 'reactstrap'

class BottomCard extends Component {
    render () {
        return (
            <div className="bottom-card-container">
                <Label>Join the Team</Label>
                <Label>Careers Page</Label>
            </div>
        )
    }
}

export default BottomCard