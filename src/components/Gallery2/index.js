import React from 'react';
import TeamCard from '../TeamCard'
import AliceCarousel from 'react-alice-carousel';
import LOLImage from '../../assets/images/homepage/lol.png'
import DotaImage from '../../assets/images/homepage/dota.png'
import PlusGameImage from '../../assets/images/homepage/plus-game.png'
import "react-alice-carousel/lib/alice-carousel.css";
import './index.css'
import { Button } from '../../../node_modules/antd';

class Gallery2 extends React.Component {  
  constructor () {
    super ()
  }
  
  responsive = {
    1024: { items: 2 },
  };
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  };

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  };
  
  
  galleryTeams() {
    return (
      [1, 2 ,3].map((item, i) => (
        <div key={`key-${i}`} className="">
            <TeamCard />
        </div>
      ))
    )
  }

  render() {
      var items = [], responsive = {}
      items = this.galleryTeams()
      responsive = this.responsive
      const { partnersIndex } = this.props
    return (
      <div className="margin">
          <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            items={items}
            duration={400}
            autoPlay={false}
            startIndex = {partnersIndex % items.length}
            fadeOutAnimation={false}
            mouseDragEnabled={true}
            playButtonEnabled={false}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            responsive={responsive}
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
            
          />
      </div>
      
    );
  }
}

export default Gallery2