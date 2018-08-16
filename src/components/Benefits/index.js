import React, { Component } from 'react'
import FeatureComponent from '../FeatureComponent'
import TitleComponent from '../TitleComponent'
import './index.css'
import {
    Label
} from 'reactstrap'
import { labels } from '../../constants/labels'
import { benefit } from '../../constants/content'
import SafeSecureImage from '../../assets/images/homepage/safe-secure.png'
import DesktopAppImage from '../../assets/images/homepage/desktop-app.png'
import TrackProgressImage from '../../assets/images/homepage/track-progress.png'
import FavouriteGamesImage from '../../assets/images/homepage/favourite-games.png'
import GreatSupportImage from '../../assets/images/homepage/great-support.png'
class Benefits extends Component {
    render () {
        return (
            <div className="benefits-container">
                <div className="support-component-container">
                    <div className="support-textarea">
                        <TitleComponent  index={labels.whyUsIndex} title={labels.whyUsTitle}/>
                    </div>
                    <div className="support-componentarea">
                        <FeatureComponent label={benefit.safeSecure.label} content={benefit.safeSecure.content} image={SafeSecureImage}/>
                        <FeatureComponent label={benefit.desktopApp.label} content={benefit.desktopApp.content} image={DesktopAppImage}/>
                    </div>
                </div>
                <div className="support-component-container">
                    <div className="left-componentarea">
                        <FeatureComponent label={benefit.trackProgress.label} content={benefit.trackProgress.content} image={TrackProgressImage}/>
                    </div>
                    <div className="support-componentarea">
                        <FeatureComponent label={benefit.favouriteGames.label} content={benefit.favouriteGames.content} image={FavouriteGamesImage}/>
                        <FeatureComponent label={benefit.greatSupport.label} content={benefit.greatSupport.content} image={GreatSupportImage}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benefits