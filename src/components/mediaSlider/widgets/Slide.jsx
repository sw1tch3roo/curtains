import React from 'react';
import '../styles.scss';
import SlideImage from './SlideImage';
// import SlideTitle from './SlideList';

export default function Slide({ data: { imageUrl, title } }) {
  return (
    <div className="slide">
      <SlideImage src={imageUrl} alt={title} />
      {/* <SlideTitle title={title} /> */}
    </div>
  );
}
