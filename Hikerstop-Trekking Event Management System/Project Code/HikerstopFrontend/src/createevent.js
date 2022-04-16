import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Navbar from "./components/Navbarreg";
import './createevent.css'
import { toast,ToastContainer } from 'react-toastify';


export default class createevent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeeventName = this.onChangeeventName.bind(this);
    this.onChangeeventdate = this.onChangeeventdate.bind(this);
    this.onChangeavailability = this.onChangeavailability.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      eventname: '',
      eventdate: '',
      availabilty: '',
      price:''
    }
  }

  onChangeeventName(e) {
    this.setState({ eventname: e.target.value })
  }

  onChangeeventdate(e) {
    this.setState({ eventdate: e.target.value })
  }

  onChangeavailability(e) {
    this.setState({ availabilty: e.target.value })
  }
  onChangeprice(e) {
    this.setState({ price: e.target.value })
  }

  
  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
        eventname: this.state.eventname,
        eventdate: this.state.eventdate,
        availabilty: this.state.availabilty,
        price:this.state.price
    };
   
    axios.post('http://localhost:8484/origin/add', studentObject)
      .then(res => {console.log(res.data)
      });
  
    this.setState({ eventname: '', eventdate: '', availabilty: '',price:'' })
  }

  render() {
    return (
        <div className="images6">
          <ToastContainer/>
            <Navbar/>
    <div className="container2">
      <h1>Add Event Here</h1>
      <Form className='booking-form'onSubmit={this.onSubmit} >
        <Form.Group controlId="eventname">
          <Form.Label className='booking-label'>Event Name</Form.Label><br></br>
          <Form.Control className='booking-text-input'placeholder="Event name" type="text" value={this.state.eventname} onChange={this.onChangeeventName} />
        </Form.Group>

        <Form.Group controlId="eventdate">
          <Form.Label className='booking-label'>Eventdate</Form.Label><br></br>
          <Form.Control className='booking-text-input' placeholder='Event Date' type="Date" value={this.state.eventdate} onChange={this.onChangeeventdate} />
        </Form.Group>

        <Form.Group controlId="availabilty">
          <Form.Label className='booking-label'>Availability</Form.Label><br></br>
          <Form.Control  className='booking-text-input'placeholder='Availability' type="text" value={this.state.availabilty} onChange={this.onChangeavailability} />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label className='booking-label'>price</Form.Label><br></br>
          <Form.Control className='booking-text-input' placeholder='Price'type="text" value={this.state.price} onChange={this.onChangeprice} />
        </Form.Group><br></br>

        <Button  className='booking-input-btn' size="lg" block="block" type="submit">
       Add event
        </Button>
      </Form>
    </div>
    </div>
    );
  }
}