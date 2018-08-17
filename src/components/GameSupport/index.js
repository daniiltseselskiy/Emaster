import React, { Component } from 'react'
import Gallery from '../Gallery'
import TitleCompnent from '../TitleComponent'
import './index.css'
import {
    Label
} from 'reactstrap'
import { labels } from '../../constants/labels'
class GameSupport extends Component {
    render () {
        return (
            <div className="game-support-container">
                <div className="support-textarea">
                    <TitleCompnent index={labels.gameIndex} title={labels.gameTitle} />
                </div>
                <div className="game-support-addgame">
                    
                </div>
                <div className="game-panel">
                    <Gallery uid="0"/>
                </div>
            </div>
        )
    }
}

export default GameSupport