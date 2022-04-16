import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './createevent.css'
import Navbar from "./components/Navbarreg";

export default class editevent extends Component {

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

  componentDidMount(id) {
    axios.get(`http://localhost:8484/origin/admin/${id}`)

      .then(res => {
        this.setState({
          eventname: res.data.eventname,
          eventdate: res.data.eventdate,
          availabilty: res.data.availabilty,
          price:res.data.price
        });
      })
      .catch((error) => {
        console.log(error);
      })
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


    axios.put('http://localhost:8484/origin/admin' + this.props.match.params, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log(' successfully updated')
      }).catch((error) => {
        console.log(error)
      })


      this.props.history.push('/listevent')
    }
  
    render() {
        return (
          <div className="img1">
          <Navbar/>
  <div className="container1">
    <h1>Update Event</h1>
    <Form className='booking-form'onSubmit={this.onSubmit}>
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

      <Button  className='booking-input-btn' size="lg" block="block" type="submit" >
    Update event
      </Button>
    </Form>
  </div>
  </div>
    );
  }
}



