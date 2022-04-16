import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { toast ,ToastContainer} from 'react-toastify'

export default class TableRow extends Component {
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
        toast.success('Event Deleted')
        // window.location.href("/eventlist")
      })

      .catch((error) => {
        console.log(error)
        toast.error('Event not Deleted')
      })
  }
  render() {
    return (
      <>
      <ToastContainer/>
      <tr>
        <td>{this.props.obj.eventname}</td>
        <td>{this.props.obj.eventdate}</td>
        <td>{this.props.obj.availabilty}</td>
        <td>{this.props.obj.price}</td>
        <td>
          <Link
            className="edit-link" 
            to={`/updateevent/${this.props.obj.eventid}`}
          >
            Edit
          </Link>
          <Button onClick={()=>this.delete(this.props.obj.eventid)} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
      </>
    )
  }
}
