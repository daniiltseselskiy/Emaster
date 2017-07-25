import React, {Component} from 'react';
import ComponentView  from './view';
import EmailValidator from 'email-validation';
import { localize } from 'react-localize-redux';
class Main extends Component {
    static get defaultProps() {
        return {
            title: 'Sample-Component'
        };
    }

    constructor(props) {
        super(props);
        this.state = this.getInitialState()
    }

    getInitialState(){
        return {
            validation: {
                name: null, email: null
            },
            info: {
                name: '', email: '', os: window.navigator.platform, bits: this.getBits()
            },
            submitted: false,
            submittedSuccess : false,
            loading : false
        }
    }
    initialize() {
        this.setState(this.getInitialState())
    }

    closeModal() {
        this.props.closeModal ? this.props.closeModal() : null
    }

    getValidationState(name) {
        return this.state.validation[name];
    }
    validateInput(name,value){
        if(name=="email" &&( value=='' || !EmailValidator.valid(value))){
            return false;
        } else if(name=="name" && value==''){
            return false
        }
        return true;
    }
    validateForm(info){
        if (this.state.submitted) {
            let validation = this.state.validation;
            let result = true;
            for(var key in info){
                if(!this.validateInput(key,info[key])){
                    validation[key] = 'error';
                    result = false;
                } else {
                    validation[key] = null;
                }

            }
            this.setState({
                validation : validation,
                info : info
            })
            return result;
        }
        this.setState({
            info : info
        })
        return false;
    }
    onChange(event) {
        let info = this.state.info;
        let name = event.target.name;
        let value = event.target.value;
        info[name] = value;
        this.validateForm(info);
    }

    save(event) {
        event.preventDefault();
        this.setState({
            submitted: true
        },()=>{
            if(this.validateForm(this.state.info)){
                this.setState({
                    loading : true
                })
                this.props.onOk(this.state.info).then((action)=>{
                    if(action.error){
                        this.setState({
                            ...(this.getInitialState())
                            ,loading:false
                        })
                    } else {
                        this.setState({
                            submittedSuccess:true,
                            loading : false
                        });
                        setTimeout(this.closeModal.bind(this),2000);
                    }
                })
            }
        })
        return false;
    }
    getBits(){

        //Scan the User Agent for a specific string
        function scanUA(str) {
            //If the string is contained in the User Agent return true
            return window.navigator.userAgent.indexOf(str) > -1;
        };

        //set a variable for the browser's reported architecture
        var platform = window.navigator.platform;
        //Set the className variable based on what their User Agent reported
        var className = '';
        //if the User Agent has any of the following strings it's 64-Bit
        if (
            scanUA('x86_64') ||
            scanUA('x86-64') ||
            scanUA('Win64') ||
            scanUA('x64;') ||
            scanUA('amd64') ||
            scanUA('AMD64') ||
            scanUA('WOW64') ||
            scanUA('x64_64') ||
            platform === 'MacIntel' ||
            platform === 'Linux x86_64'
        ) {
            return "64";
            //Otherwise if it's got any of these it's a mobile device
        } else if (
            platform === 'Linux armv7l' ||
            platform === 'iPad' ||
            platform === 'iPhone' ||
            platform === 'Android' ||
            platform === 'iPod' ||
            platform === 'BlackBerry'
        ) {
            return "mobile";
            //This one doesn't report accurately, set it to unknown
        } else if ( platform === 'Linux i686' ) {
            className = 'unknown';
            //Anything else will just be lumped into 32-bit
            return "32";
        } else {
            return "32";
        }
    }
    render() {
        return (ComponentView.bind(this))();
    }
}
export default localize(Main,'locale')
