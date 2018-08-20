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
                    {/* <Route path={`${base}/features`} component={Features} />
                    <Route path={`${base}/about`} component={About} />
                    <Route path={`${base}/partners`} component={Partners} />
                    <Route path={`${base}/help`} component={Help} />
                    <Route path={`${base}/forums`} component={Forums} />
                    <Route path={`${base}/contact`} component={Contact} />
                    <Route path={`${base}/careers` }component={Careers} />
                    <Route path={`${base}/download`} component={Download} />
                    <Route path={`${base}/`} component={Homepage} />
                    <Route component={NotFound}/> */}
                    <Route path="/en/features" component={Features} />
                    <Route path="/en/about" component={About} />
                    <Route path="/en/partners" component={Partners} />
                    <Route path="/en/help" component={Help} />
                    <Route path="/en/forums" component={Forums} />
                    <Route path="/en/contact" component={Contact} />
                    <Route path="/en/careers" component={Careers} />
                    <Route path="/en/download" component={Download} />
                    <Route path="/en/" component={Homepage} />
                    <Route path="/pt/features" component={Features} />
                    <Route path="/pt/about" component={About} />
                    <Route path="/pt/partners" component={Partners} />
                    <Route path="/pt/help" component={Help} />
                    <Route path="/pt/forums" component={Forums} />
                    <Route path="/pt/contact" component={Contact} />
                    <Route path="/pt/careers" component={Careers} />
                    <Route path="/pt/download" component={Download} />
                    <Route path="/pt/" component={Homepage} />
                    <Route path="/cn/features" component={Features} />
                    <Route path="/cn/about" component={About} />
                    <Route path="/cn/partners" component={Partners} />
                    <Route path="/cn/help" component={Help} />
                    <Route path="/cn/forums" component={Forums} />
                    <Route path="/cn/contact" component={Contact} />
                    <Route path="/cn/careers" component={Careers} />
                    <Route path="/cn/download" component={Download} />
                    <Route path="/cn/" component={Homepage} />
                    <Route component={NotFound}/>
                </Switch>
                <Footers />
            </div>
        )
    }
}
export default RouterComponent;

