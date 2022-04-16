import React from "react";
import usePayment from './usePayment';
import './payment.css';
import Navbar  from "../Navbar";

const Payment = () => {
    const {handleChange, values, handleSubmit, errors,alert} = usePayment();

    return(
      
        <div className='usePayment'>
       <Navbar/>
       <div className='container1'>
                <h1>
                    Welcome To Hikerstop
                </h1>
            <form className='form' onSubmit={handleSubmit}>
             
                <div className='usePayment'>
             
                    <label htmlFor='name' className='payment-label' >
                    No of person:  
                    </label><br></br>
                    <input id='name' type='text' name='name'placeholder="No of person" className='payment-text-input'  value={values.name} onChange={handleChange} />
                
                </div><br></br>

                <div className='usePayment'>
                    <label htmlFor='paydate' className='payment-label'>Bookdate:</label><br></br>
                    <input id='paydate' type='Date' name='paydate' placeholder="Booking Date" className='payment-text-input' value={values.paydate} onChange={handleChange}/>
                 
                </div>
              

                <button className='payment-input-btn' type='submit' onClick={handleSubmit}>Payment</button><br/>
           
                 <h2><a href='\EvBook'>Go to back page</a></h2>
            </form>
            </div>
            </div>
         
    )
}

export default Payment