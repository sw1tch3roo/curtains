import React, { useContext } from 'react';
import { SliderContext } from '../../MediaSlider';

import '../../styles.scss';

export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`dot ${slideNumber === number ? 'selected' : ''}`}
      onClick={() => goToSlide(number)}
    />
  );
}
