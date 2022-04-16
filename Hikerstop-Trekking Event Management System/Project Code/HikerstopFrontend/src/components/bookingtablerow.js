import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { toast, ToastContainer } from 'react-toastify'

export default class bookingtablerow extends Component {
  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this)
  }

  delete(id) {
    axios
      .delete(`http://localhost:8484/bookevent/event/${id}`,
 )
      .then((res) => {
        console.log('successfully deleted!')
        toast.success('successfully deleted!')
        this.props.history.push('/eventlist')
      })

      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <>
      <ToastContainer/>
      <tr>
        {/* <td>{this.props.obj.Trekkersname}</td> */}
        <td>{this.props.obj.bookdate}</td>
        <td>{this.props.obj.noofperson}</td>
        <td>{this.props.obj.eventname}</td>
        <td>
          <Link
            className="edit-link" 
            to={`/update/${this.props.obj.bookid}`}
          >
            Edit
          </Link>
          <Button onClick={()=>this.delete(this.props.obj.bookid)} size="sm" variant="danger">

            Delete
          </Button>
        </td>
      </tr>
      </>
    )
  }
}
