import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './bookingtablerow';
import Navbar from "./Navbar";

export default class bookingdata extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8484/bookevent/event')
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
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
            {/* <th>Trekkers name</th> */}
            <th>Bookdate</th>
            <th>No Of person</th>
            <th>Event Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>
    </div>
    );
  }
}