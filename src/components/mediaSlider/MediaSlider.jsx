import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { getImages } from './imagesApi';

import Arrows from './widgets/Controls/Arrows';
import Dots from './widgets/Controls/Dots';
import SlidesList from './widgets/SlideTitle';

// import axios from 'axios';
import { useParams } from 'react-router-dom';

export const SliderContext = createContext();

const Slider = function ({ width, height, autoPlay, autoPlayTime }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const { productId } = useParams();

  React.useEffect(() => {
    const loadData = async () => {
      const images = await getImages(productId);

      setItems(images);
    };
    loadData();
  }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

  if (!items) {
    <div>Загрузка...</div>;
  }

  return (
    <div className="slider_content">
      <div
        style={{ width, height }}
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <SliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: items.length,
            slideNumber: slide,
            items,
          }}
        >
          <Arrows />
          <SlidesList />
          <Dots />
        </SliderContext.Provider>
      </div>
    </div>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: '100%',
  height: '100%',
};

export default Slider;
