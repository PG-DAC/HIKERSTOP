import React from 'react';
import './Gallery.css';
import CardItem from './gallerycarditems'
import Navbar from '../Navbar';

function Gallary() {
  return (
    <div>
      <Navbar/>
    <div className='cards'>
      <h1>Events Gallary</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='/images/HS1.jpg'
          
          
            />
          
            <CardItem
              src='/images/img-1.jpg'
        
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/img-9.jpg  '
             
            />
            <CardItem
              src='/images/img-8.jpg '
           
            />
            <CardItem
              src='images/img-7.jpg '
           
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Gallary;