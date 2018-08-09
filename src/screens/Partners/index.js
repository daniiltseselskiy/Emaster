import React, { Component } from 'react'
import Support3Text from '../../components/Support3Text'
import BottomCard from '../../components/BottomCard'
import Benefits from '../../components/Benefits'
import './index.css'

import {
    Label,
} from 'reactstrap'

class Partners extends Component {
    render () {
        return (
            <div className="partners-container">
                <Label>Our Partners</Label>
                <Support3Text/>
                <div className="meet-partners-container">
                    <div className="partners-content">
                        <div className="partners-arrow">
                        </div>
                    </div>
                    <BottomCard />
                </div>
                <div className="extend-family-container">
                    <div className="extend-family-start">
                    </div>
                    <div className="extend-family-content">
                    </div>
                </div>
                <Benefits />
            </div>
        )
    }
}

export default Partners