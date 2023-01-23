import React, { useContext } from 'react';
import { SliderContext } from '../MediaSlider';

import '../styles.scss';
import Slide from './Slide';

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div className="slide-list" style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
}
