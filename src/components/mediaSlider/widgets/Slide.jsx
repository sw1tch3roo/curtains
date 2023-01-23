import React from 'react';
import '../styles.scss';
import SlideImage from './SlideImage';
import SlideTitle from './SlideList';

export default function Slide({ data: { url, title } }) {
  return (
    <div className="slide">
      <SlideImage src={url} alt={title} />
      <SlideTitle title={title} />
    </div>
  );
}
