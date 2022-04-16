import React from "react";
import useBook from './useBook';
import './EventBooking.css'
import Navbar from './Navbar';
import Payment from "./pages/Payment";
import { useHistory } from "react-router-dom";

import { ToastContainer} from 'react-toastify';

const EventBooking = () => {
    const {handleChange, values, handleSubmit, errors} = useBook();
    const history = useHistory();

    return(
   <div className="images">
     <ToastContainer/>
       <Navbar/>
<div >
            <div className='container1'>
               <h1>
                    Welcome To Hikerstop
                </h1>
          <form className='booking-form' onSubmit={handleSubmit}>
          <div className='booking-input'>
                    <label htmlFor='trekkersname' className='booking-label'>
                    Trekkers Name : 
                    </label>
                    <input id='trekkersname' type='text' name='trekkersname' placeholder='Trekkers Name' className='booking-text-input' value={values.trekkersname} onChange={handleChange}/>
                 
                </div>
                <div className='booking-input'>
                    <label htmlFor='bookdate' className='booking-label' >
                      Bookdate: 
                    </label>
                    <input id='bookdate' type='Date' name='bookdate' placeholder="Enter date" className='booking-text-input'  value={values.bookdate} onChange={handleChange}  />
                
          
                </div>

                <div className='booking-input'>
                    <label htmlFor=' noofperson' className='booking-label'>
                      No of person: 
                    </label>
                    <input id='noofperson' type='number' name='noofperson' placeholder="No of person"className='booking-text-input' value={values.noofperson} onChange={handleChange}/>
             
                </div>

                <div className='booking-input'>
                    <label htmlFor='eventname' className='booking-label'>
                    Event Name : 
                    </label>
                    <input id='evname' type='text' name='eventname' placeholder='Event Name' className='booking-text-input' value={values.eventname} onChange={handleChange}/>
                 
                </div>

                <button className='booking-input-btn' type='submit'  >Book Now</button><br/>
                  {/* <button classname='payment' type='submit'> <a href='\pay'>Proceed to payment</a></button> */}
       
                {/* <span className='home'>Go to home page <h6><a href='\Login'>Login here</a></h6></span> */}
            </form>
            </div>
            </div>
            </div>
    )
}

export default EventBooking

