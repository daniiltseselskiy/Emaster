import React, { Component } from 'react'
import FeatureComponent from '../FeatureComponent'
import './index.css'
import {
    Label
} from 'reactstrap'

class Benefits extends Component {
    render () {
        return (
            <div className="benefits-container">
                <div className="start-component-container">
                    <div className="support-textarea">
                        <Label>- Why Us</Label>
                        <Label>Our Benefits & Advantage</Label>
                    </div>
                    <div className="support-componentarea">
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                    </div>
                </div>
                <div className="support-component-container">
                    <div className="left-componentarea">
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                    </div>
                    <div className="support-componentarea">
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                        <FeatureComponent Label="SafeSecure" Content="LoremIpsume" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Benefits