import React from 'react';
import TeamCard from '../TeamCard'
import AliceCarousel from 'react-alice-carousel';
import LOLImage from '../../assets/images/homepage/lol.png'
import DotaImage from '../../assets/images/homepage/dota.png'
import PlusGameImage from '../../assets/images/homepage/plus-game.png'
import "react-alice-carousel/lib/alice-carousel.css";
import './index.css'
class Gallery extends React.Component {  
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1800: { items: 3 },
  };
  responsive1 = {
    1800: { items: 1 },
  };
  responsive2 = {
    1800: { items: 2 },
  };
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  };

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  };
  
  galleryItems() {
    return (
      [LOLImage, DotaImage ,PlusGameImage].map((item, i) => (
        <div key={`key-${i}`} className="">
            <img draggable={false} src={item} />
        </div>
      ))
    )
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
    const { uid } = this.props
    var items = [], responsive = {}
    if (uid == 0) {
      items = this.galleryItems()
      responsive = this.responsive
    } else if (uid == 1) {
      items = this.galleryTeams()
      responsive = this.responsive1
    } else {
      items = this.galleryTeams()
      responsive = this.responsive2
    }
    return (
      <AliceCarousel
        dotsDisabled={true}
        buttonsDisabled={true}
        items={items}
        duration={400}
        autoPlay={false}
        startIndex = {1}
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
    );
  }
}

export default Gallery