import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router'
import Headers from '../containers/Headers';
import Footers from '../containers/Footers';
import Homepage from '../containers/Homepage';
import Features from '../containers/Features';
import About from '../containers/About';
import Partners from '../containers/Partners';
import Help from '../containers/Help'
import Forums from '../containers/Forums';
import Contact from '../containers/Contact';
import Careers from '../containers/Careers';
import Download from '../containers/Download';

const style = { 
    height: '100vh', display: 'flex' , flexDirection: 'column'
}
class RouterComponent extends Component {
    render () {
        return (
            <div style={style}>
                <Headers />
                <Switch>
                    <Route path="/features" component={Features} />
                    <Route path="/about" component={About} />
                    <Route path="/partners" component={Partners} />
                    <Route path="/help" component={Help} />
                    <Route path="/forums" component={Forums} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/careers" component={Careers} />
                    <Route path="/download" component={Download} />
                    <Route path="/" component={Homepage} />
                </Switch>
                <Footers />
            </div>
        )
    }
}

export default RouterComponent;
