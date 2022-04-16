import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableRow1 from './TableRow1';
import Navbar from "./components/Navbar";


export default class Eventtablelist extends Component {

  constructor(props) {
    super(props)
    this.state = {
        Event: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8484/origin/allevent`)
      .then(res => {
          console.log("res",res);
        this.setState({
        
          Event: res.data,
       
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.Event &&  this.state.Event.map((res, i) => {
      return <TableRow1 obj={res} key={i} />;
    });
  }


  render() {
    console.log("Event", Event);
    return (
        <div>
            <Navbar/>
    <div className="table table-success">
      <Table striped bordered hover>
        <thead>
          <tr>
       
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Availability</th>
            <th>price</th>
            <th>View Details</th>
            <th>Book Now</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>
    </div>);
  }
}