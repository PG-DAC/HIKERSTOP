import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import Navbar from "./components/Navbarreg";


export default class ListEvent extends Component {

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
      return <TableRow obj={res} key={i} />;
    });
  }


  render() {

    return (
        <div>
            <Navbar/>
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
       
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Availability</th>
            <th>price</th>
            <th>Action</th>
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