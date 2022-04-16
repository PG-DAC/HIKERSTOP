import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class TableRow1 extends Component {
  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this)
  }


  delete(id) {
    axios
      .delete(`http://localhost:8484/origin/admin/${id}`,
 )
      .then((res) => {
        console.log('successfully deleted!')
        window.location.href("/eventlist")
      })

      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.eventname}</td>
        <td>{this.props.obj.eventdate}</td>
        <td>{this.props.obj.availabilty}</td>
        <td>{this.props.obj.price}</td>
        <td>
       
              <a href="/devkund"><h2>View Details</h2></a>
         </td>
         <td>
         <a href="/EvBook"><h2>Book Now</h2></a>
         </td>
          {/* <Button onClick={()=>this.delete(this.props.obj.eventid)} size="sm" variant="danger">
            Delete
          </Button>
        */}
      </tr>
    )
  }
}
