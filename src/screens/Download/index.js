import React , { Component } from 'react'
import DownloadVersion from '../../components/DownloadVersion'
import TitleComponent from '../../components/TitleComponent'
import DButton from '../../components/DButton'
import BottomCard from '../../components/BottomCard'
import './index.css'
import '../index.css'
import {
    Label,
    Button,
    Col, 
    Row,
} from 'reactstrap'
import NextIcon from '../../assets/images/download/next-icon.png'
import MacLogo from '../../assets/images/download/apple-logo.png'
import WindowsLogo from '../../assets/images/download/windows-logo.png'
import LinuxLogo from '../../assets/images/download/linux-logo.png'
import labels from '../../constants/labels'
import content from '../../constants/content'
class Download extends Component {
    render () {
        return (
            <div className="download-container">
                <div className="download-conent-h">
                    <TitleComponent index={labels.downloadIndex} title={labels.downloadTitle} /> 
                    <DButton title="DOWNLOAD NOW" image={WindowsLogo} active={true}/>
                </div>
                <div className="machine-version">
                    <DownloadVersion image={MacLogo}/>
                    <DownloadVersion image={LinuxLogo}/>
                </div>
                <div className="feature-help">
                    <div className="feature-content">
                        <img src={NextIcon} alt="Next Arrow" />
                        <div className="text-content-f">
                            <h3 className="text-mid-paragraph">{content.exploreFeatures.label}</h3>
                            <p className="text-paragraph">{content.exploreFeatures.content}</p>
                        </div>
                        <BottomCard index={labels.needHelpIndex} link={labels.needHelpLink} explore={true}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Download