import React from 'react';
import Slider from './components/Slider';
import slides from './mockdata.json';

export type JSONData = typeof slides;

function App() {
  /*   let json = Utilities.JSONLoader.loadFromFile('./mockdata.json');
  let slides: Array<Slide> = JSON.parse(json).location;
  console.log(slides); */

  return (
    <div className="container">
      <div className="wrapper">
        <div className="section__inner">
          <Slider activeSlide={1} slides={slides} />
        </div>
      </div>
    </div>
  );
}

export default App;
