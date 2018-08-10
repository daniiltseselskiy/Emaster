import React , { Component } from 'react'
import DownloadVersion from '../../components/DownloadVersion'
import './index.css'
import {
    Label,
    Button,
    Col, 
    Row,
} from 'reactstrap'

class Download extends Component {
    render () {
        return (
            <div className="download-container">
                <div className="download-conent-h">
                    <Label>- Download Our App</Label>
                    <Label>Download the eMasters App</Label>
                    <Button>Download Now</Button>
                </div>
                <div className="machine-version">
                    <Row>
                        <Col xl="6">
                            <DownloadVersion />
                        </Col>
                        <Col xl="6">
                            <DownloadVersion />
                        </Col>
                    </Row>
                </div>
                <div className="feature-help">
                    <div className="feature-content">
                        <img alt="Next Arrow" />
                        <div className="text-content-f">
                            <Label>Explore the feature</Label>
                            <Label>ut neim .................................</Label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Download