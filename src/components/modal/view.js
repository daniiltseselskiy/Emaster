import React from 'react';
import './styles.css';
import {Modal,Row,Col,Button,Form,FormGroup,FormControl,ControlLabel,HelpBlock} from 'react-bootstrap';
import close from './assets/close.png';
//import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
var view = function(){
    let {translate} = this.props;

    return (
      <div className="modal-container">
        <Modal show={this.props.show} onEnter={this.initialize.bind(this)} onHide={this.closeModal.bind(this)}  aria-labelledby="contained-modal-title" dialogClassName="make-application-modal">
          <Modal.Body>
			  <a className="close-modal"><img onClick={this.closeModal.bind(this)} src={close} alt="close"/></a>
			  {
			  	this.state.submittedSuccess?(
					<div>
						<p className="sub-title text-center letter-spacing-2">{translate('signupForm.success')}</p>
					</div>
				):(
					<div>
						<p className="title text-center letter-spacing-2"><span className="brand-yellow">{translate('signupForm.title').props.children.charAt(0)}</span>{translate('signupForm.title').props.children.substr(1)}</p>
						<p className="sub-title text-center letter-spacing-2">{translate('signupForm.description')}</p>

						<Form horizontal onSubmit={this.save.bind(this)}>
							<FormGroup controlId="formHorizontalEmail" validationState={this.getValidationState("name")}>
								<Col componentClass={ControlLabel} sm={6}>
									<span className="titillium-bold">{translate('signupForm.name')}</span>
								</Col>
								<Col sm={9}>
									<FormControl value={this.state.info.name} onChange={this.onChange.bind(this)} name="name" type="text" placeholder={translate('signupForm.namePlaceholder').props.children} />
                                    {this.getValidationState("name")=='error'?<HelpBlock>Name is mandatory.</HelpBlock>:null}
								</Col>
							</FormGroup>
							<FormGroup controlId="formHorizontalPassword" validationState={this.getValidationState("email")}>
								<Col componentClass={ControlLabel} sm={6}>
									<span className="titillium-bold">{translate('signupForm.email')}</span>
								</Col>
								<Col sm={9}>
									<FormControl value={this.state.info.email} onChange={this.onChange.bind(this)} name="email" type="email" placeholder={translate('signupForm.emailPlaceholder').props.children} />

                                    {this.getValidationState("email")=='error'?<HelpBlock>Email is mandatory and should be of proper format.</HelpBlock>:null}
								</Col>
							</FormGroup>
							<FormGroup>
								<Col sm={12} className="text-center">
									<Button disabled = {this.state.loading} className="brand-button" type="submit">
										<p className="brand-button-text">{this.state.submittedSuccess?translate('signupForm.successBtn'):translate('signupForm.saveBtn')}</p>
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</div>
				)
			  }
          </Modal.Body>
        </Modal>
      </div>
		)
}
export default view;
