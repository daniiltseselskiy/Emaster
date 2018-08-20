import React, { Component } from 'react';
import {
    Route,
    Switch,
    Router
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
import NotFound from '../screens/NotFound'
const style = { 
    height: '100vh', display: 'flex' , flexDirection: 'column'
}
class RouterComponent extends Component {
    render () {
        const base = localStorage.getItem('base')
       
      
        return (
            <div style={style}>
                <Headers />
                <Switch>
                    <Route path={`${base}/features`} component={Features} />
                    <Route path={`${base}/about`} component={About} />
                    <Route path={`${base}/partners`} component={Partners} />
                    <Route path={`${base}/help`} component={Help} />
                    <Route path={`${base}/forums`} component={Forums} />
                    <Route path={`${base}/contact`} component={Contact} />
                    <Route path={`${base}/careers` }component={Careers} />
                    <Route path={`${base}/download`} component={Download} />
                    <Route path={`${base}/`} component={Homepage} />
                    <Route component={NotFound}/>
                </Switch>
                <Footers />
            </div>
        )
    }
}
export default RouterComponent;

