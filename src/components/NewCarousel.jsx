import React, {useState} from 'react'


import captain from "../asset/image/Captainmarvel2.jpg"
import spider from "../asset/image/spiderman.jpg"
import avengers from "../asset/image/avengers.jpg"
import horreur from "../asset/image/llorona.jpg"
import love from "../asset/image/lucifer.jpeg"
import dance from "../asset/image/workit.jpg"
import rock from "../asset/image/theDirt.jpg"

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  const items = [
    {
      src: `${horreur}`,
      altText: 'llorona',
      caption: 'La Malédiction de la Llorona'
    },
    {
      src: `${love}`,
      altText: 'Real love never end',
      caption: 'Is so Reaaaal'
    },
    {
      src: `${dance}`,
      altText: 'Dance and kill it',
      caption: 'Who knows,Knows'
    },
    {
      src: `${rock}`,
      altText: 'Dark or Die',
      caption: 'Roooooooock until you die'
    },
    {
      src: `${avengers}`,
      altText: 'Avengers Endgame',
      caption: 'Avengers Endgame'
    },
    
  ];

const NewCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img style={{width: "100%"}}  className="slides"   src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
    return (
        <div>
            <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
        </div>
    )
}

export default NewCarousel
