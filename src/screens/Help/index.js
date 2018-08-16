import React, { Component } from 'react'
import JoinCompetition from '../../components/JoinCompetition'
import './index.css'
import '../index.css'
import {
    Label,

} from 'reactstrap'
import GymImage from '../../assets/images/help/gym.png'
import Ellipse from '../../assets/images/help/ellipse.png'
import { labels } from '../../constants/labels'
import { basicPage } from '../../constants/content'

class Help extends Component {
    renderBottomText = ( contents ) => {
        return contents.map( 
            (item, index) => {
                return (
                    <div key={index} className="text-content-e">
                        <img src={Ellipse} alt="Check Box"/>
                        <p className="text-paragraph">{item}</p>
                    </div>
                )
            }
        )
    }
    render () {
        const contents = [basicPage.lcontent1, basicPage.lcontent2, basicPage.lcontent3, basicPage.lcontent4, basicPage.lcontent5, ]
        return (
            <div className="help-container">
                <div className="text-content-t">
                    <Label className="text-title">{labels.basicTitle}</Label>
                </div>
                <div className="text-content-h">
                    <h3 className="text-mid-paragraph">{basicPage.content1}</h3>
                    <p className="text-paragraph">{basicPage.content2}</p>
                    <p className="text-paragraph">{basicPage.content3}</p>
                    <p className="text-paragraph">{basicPage.content4}</p>
                    <p className="text-paragraph">{basicPage.content5}</p>
                    <p className="text-paragraph">{basicPage.content6}</p>
                </div>
                <div className="text-content-m">
                    <div>
                        <Label className="text-mid-title">{labels.basicTitle2}</Label>
                    </div>
                    <div>
                        <p className="text-paragraph">{basicPage.mcontent1}</p>
                        <p className="text-paragraph">{basicPage.mcontent2}</p>
                        <p className="text-paragraph">{basicPage.mcontent3}</p>
                    </div>
                </div>
                <div className="text-content-h">
                    <p className="text-paragraph">{basicPage.econtent1}</p>
                    <p className="text-paragraph">{basicPage.econtent2}</p>
                </div>
                <div className="image-content-h">
                    <img src={GymImage} alt="Image"/>
                </div>
                <div className="text-content-h">
                    <p className="text-paragraph">{basicPage.ucontent1}</p>
                    <p className="text-paragraph">{basicPage.ucontent2}</p>
                </div>
                { this.renderBottomText(contents) }
                <JoinCompetition />
            </div>
        )
    }
}

export default Help