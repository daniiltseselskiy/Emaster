import React, { Component } from 'react'
import TitleCompnent from '../TitleComponent'
import CButton from '../CButton'
import './index.css'
import '../../screens/index.css'
import {
    Label
} from 'reactstrap'
import { labels } from '../../constants/labels'
import { whatisEmasters } from '../../constants/content'
class Support3Text extends Component {
    render () {
        return (
            <div className="support-3-container">
                <div className="support-textarea-s">
                    <TitleCompnent index={labels.whatFeaturesIndex} title={labels.whatFeaturesTitle} />
                </div>
                <div className="support-textarea-l">
                    <h3 className="text-mid-paragraph">{whatisEmasters.label}</h3>
                    <p className="text-paragraph">{whatisEmasters.content1}</p>
                    <CButton Title="DOWNLOAD" />
                </div>
                <div className="support-textarea-l">
                    <p className="text-paragraph">{whatisEmasters.content2}</p>
                </div>
            </div>
        )
    }
}

export default Support3Text