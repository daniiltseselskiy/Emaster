import React from 'react';
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
        <div key={`key-${i}`} className="yours-custom-class">
            <img draggable={false} src={item} />
        </div>
      ))
    )
  };
  
  render() {
    const items = this.galleryItems();

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
        responsive={this.responsive}
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    );
  }
}

export default Gallery