import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';

var view = function(){
    let {translate} = this.props;
	return (
		<div className="categories">
      <div className="responsive">
  			<p className="title extra-large-text titillium-regular letter-spacing"><span className="brand-yellow">{translate("faqPage.category.title").props.children.charAt(0)}</span>{translate("faqPage.category.title").props.children.substr(1)}</p>
  			<Grid className="content">
  				<Row className="row-one">
  					{
  						this.props.categories.map((category,index)=>{
  							return (
  								<Col key={index} sm={12} md={3} className="column clickable" onClick={()=>{this.props.onCategoryClick(index)}}>
  									<img src={(this.props.activeCategory==index?category.activeImage:category.image)} alt="user" className="grid-image"/>
  									<p className={"grid-title titillium-regular "+(this.props.activeCategory==index?'brand-yellow':'')}>{translate(category.description)}</p>
  								</Col>

                              )
  						})
  					}
  				</Row>
  			</Grid>
      </div>
		</div>
	)
}
export default view;
