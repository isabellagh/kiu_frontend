import React from 'react';
import './categories.css';
// import IMG1 from '../assets/IMG1.png'

const Categories = () => {
  return (
    <>
      <h1 className='header-hero'>KEEP IT UP</h1>
      <p className='paragraph'>
        Here you can find the best trainers to help you achieve your goals.
      </p>
      <p className='paragraph'>
        Click on a category that best fits your needs.
      </p>
      <div className='container-categories'>
        <div className='gallery-container w-2 h-2'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?workout'
                alt='workout'
              />
            </div>
            <div className='text'>Workout</div>
          </div>
        </div>

        <div className='gallery-container w-1 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?happiness'
                alt='workout'
              />
            </div>
            <div className='text'>B Happy</div>
          </div>
        </div>

        <div className='gallery-container w-2 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?weightloss'
                alt='workout'
              />
            </div>
            <div className='text'>WeightLoss</div>
          </div>
        </div>

        <div className='gallery-container w-3 w-2'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?gym'
                alt='workout'
              />
            </div>
            <div className='text'>Gym</div>
          </div>
        </div>

        <div className='gallery-container w-2 h-2'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?exercises'
                alt='workout'
              />
            </div>
            <div className='text'>Exercises</div>
          </div>
        </div>

        <div className='gallery-container w-1 h-3'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?healthy'
                alt='workout'
              />
            </div>
            <div className='text'>Healthy</div>
          </div>
        </div>

        <div className='gallery-container w-1 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?fitness'
                alt='workout'
              />
            </div>
            <div className='text'>Fitness</div>
          </div>
        </div>

        <div className='gallery-container w-3 w-2'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?sports'
                alt='workout'
              />
            </div>
            <div className='text'>Sports</div>
          </div>
        </div>

        <div className='gallery-container w-2 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?bodybuild'
                alt='workout'
              />
            </div>
            <div className='text'>Bodybuild</div>
          </div>
        </div>

        <div className='gallery-container w-1 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img
                src='https://source.unsplash.com/1600x900/?meal'
                alt='workout'
              />
            </div>
            <div className='text'>Meals</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
