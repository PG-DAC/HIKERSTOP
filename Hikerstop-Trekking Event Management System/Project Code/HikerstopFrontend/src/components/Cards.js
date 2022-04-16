import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='/images/Sandan.jpg'
              text='Sandhan Valley: Valley of Shadows'
              label='Rs: 1000'
              path='/sandan'
            />
            <CardItem
              src='/images/Rajgad_Gallery6SP.jpg'
              text='Rajgad: When you are enthusiastic, the mountain also looks like a clay pile'
              label='Rs: 1200'
              path='/rajgad'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='/images/Bikeriding.jpg'
              text='The land of high passes and white land LADAKH'
              label='coming soon'
              path='/services'
            />
            <CardItem
              src='images/Camping.jpg'
              text='Get Ready for green grass, warm days and campfire nights'
              label='coming soon'
              path='/products'
            />
            <CardItem
              src='/images/Rafting.jpg'
              text='Life is either daring advanture or nothing at all #Rafting'
              label='coming soon'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;