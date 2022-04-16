import React from 'react';
import './eventscards.css';
import CardItem from './eventcarditems';
import Navbar from '../Navbar';
function eventcards() {
  return (
    <div className='images4'>
      <Navbar/>
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='/images/Rajgad_Gallery6SP.jpg'
              text='FORT TREKKING'
              label='Available'
              path='/usereventlist'
            />
          
            <CardItem
              src='/images/Rafting.jpg'
              text='RIVER RAFTING'
              label='coming soon'
              path='/rajgad'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/Camping.jpg  '
              text='CAMPING'
              label='coming soon'
              path='/services'
            />
            <CardItem
              src='/images/Bikeriding.jpg'
              text='BIKE RIDING'
              label='coming soon'
              path='/products'
            />
            <CardItem
              src='images/Camping.jpg '
              text='CYCLE RIDING'
              label='coming soon'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default eventcards;