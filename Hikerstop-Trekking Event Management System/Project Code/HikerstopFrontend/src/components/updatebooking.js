import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './EventBooking.css'
import Navbar from "./Navbar";

export default class updatebooking extends Component {

  constructor(props) {
    super(props)

    this.onChangetrekkerName = this.onChangetrekkerName.bind(this);
    this.onChangebookdate = this.onChangebookdate.bind(this);
    this.onChangenoofperson = this.onChangenoofperson.bind(this);
    this.onChangeeventname=this.onChangeeventname(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      Trekkersname:'',
        bookdate:'',
        noofperson:'',

        eventname:'',
        customer_fk:'1'
    }
  }

  componentDidMount(id) {
    axios.get(`http://localhost:8484/bookevent/event/${id}`)
      .then(res => {
        this.setState({
          Trekkersname: res.data.Trekkersname,
          bookdate: res.data.bookdate,
          noofperson: res.data.noofperson,
          eventname: res.data.eventname
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangetrekkerName(e) {
    this.setState({ Trekkersname: e.target.value })
  }

  onChangebookdate(e) {
    this.setState({ bookdate: e.target.value })
  }

  onChangenoofperson(e) {
    this.setState({ noofperson: e.target.value })
  }
  onChangeeventname(e) {
    this.setState({ eventname: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const Object = {
      Trekkersname: this.state.Trekkersname,
          bookdate: this.state.bookdate,
          noofperson: this.state.noofperson,
          eventname: this.state.eventname
    };

    axios.put('http://localhost:8484/bookevent/event' + this.props.match.params, Object)
      .then((res) => {
        console.log(res.data)
        console.log(' successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to  List 
    this.props.history.push('/eventlist')
  }


  render() {
    return (<div>
      <Navbar/>

           <div className='container1'>

              <h1>
                   Welcome To Hikerstop
               </h1>
         <form className='booking-form' onSubmit={this.onSubmit}>
         <div className='booking-input'>
                   <label htmlFor='Trekkersname' className='booking-label'>
                   Trekkers Name : 
                   </label>
                   <input id='Trekkersname' type='text' name='Trekkersname' placeholder='Trekkers Name' className='booking-text-input' value={this.state.Trekkersname} onChange={this.onChangetrekkerName}/>
                
               </div>
               <div className='booking-input'>
                   <label htmlFor='bookdate' className='booking-label' >
                     Bookdate: 
                   </label>
                   <input id='bookdate' type='Date' name='bookdate' placeholder="Enter date" className='booking-text-input'  value={this.state.bookdate} onChange={this.onChangebookdate} />
                   {/* {errors.username && <p>{errors.username}</p>} */}
               </div><br></br>

               <div className='booking-input'>
                   <label htmlFor=' noofperson' className='booking-label'>
                     No of person: 
                   </label>
                   <input id='noofperson' type='number' name='noofperson' placeholder="No of person"className='booking-text-input' value={this.state.noofperson} onChange={this.onChangenoofperson}/>
                   {/* {errors.password && <p>{errors.password}</p>} */}
               </div><br></br>

               <div className='booking-input'>
                   <label htmlFor='eventname' className='booking-label'>
                   Event Name : 
                   </label>
                   <input id='eventname' type='text' name='eventname' placeholder='Event Name' className='booking-text-input' value={this.state.eventname} onChange={this.onChangeeventname}/>
                
               </div>

               <button className='booking-input-btn' type='submit'  >Update </button><br/>
                 {/* <button classname='payment' type='submit'> <a href='\pay'>Proceed to payment</a></button> */}
      
               {/* <span className='home'>Go to home page <h6><a href='\Login'>Login here</a></h6></span> */}
           </form>
           
           </div>
           </div>
           );
  }
}