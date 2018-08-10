import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'
import "react-alice-carousel/lib/alice-carousel.css";
import './index.css'
class Gallery extends React.Component {  
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
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
  
  galleryItems() {
    return (
      [InstagramIcon,InstagramIcon,InstagramIcon,InstagramIcon,InstagramIcon].map((item, i) => (
        <div key={`key-${i}`} className="yours-custom-class">
            <img src={item} />
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
        fadeOutAnimation={true}
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