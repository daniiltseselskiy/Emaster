import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
import logo from './assets/logo.png';
var view = function(){
	let {translate} = this.props;
	return (
		<div className="footer">
			<div className="responsive">
				<Grid>
					<Row>
						<Col sm={12} md={4}>
							<img src={logo} alt="Logo" className="logo"/>
						</Col>
						<Col sm={12} md={4}>
							<p className="copyright">{translate("footer.copyright")}</p>
						</Col>
						<Col sm={12} md={4}>
							<a className="brand-white" href="/terms">{translate("footer.terms")}</a>
						</Col>
					</Row>
				</Grid>
			</div>
		</div>
	)
}
export default view;
