import React, { Component } from 'react'
import Gallery from '../../components/Gallery'
import './index.css'
import {
    Label
} from 'reactstrap'

class GameSupport extends Component {
    render () {
        return (
            <div className="game-support-container">
                <div className="support-textarea">
                    <Label>- More coming soon</Label>
                    <Label>Games We support</Label>
                </div>
                <div className="game-support-addgame">
                    
                </div>
                <div className="game-panel">
                    <Gallery />
                </div>
            </div>
        )
    }
}

export default GameSupport