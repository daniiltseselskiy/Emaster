import React, { Component } from 'react'
import './index.css'

class FeatureComponent extends Component {
    render () {
        const { Image, Label, Content} = this.props
        return (
            <div className="feature-component">
                <img src={Image} alt="Image"/>
                <Label>{Label}</Label>
                <Label>{Content}</Label>
            </div>
        )
    }
}

export default FeatureComponent