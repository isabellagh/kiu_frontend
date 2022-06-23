import React from 'react';
import Calculator from '../calculator/Calculator';
import Categories from './Categories';
import Hero from './Hero';
import './welcome.css';

const Welcome = () => {
  return (
    <div className='container'>
      {/* <Hero /> */}
      <Categories />
      {/* <Calculator /> */}
    </div>
  );
};

export default Welcome;
