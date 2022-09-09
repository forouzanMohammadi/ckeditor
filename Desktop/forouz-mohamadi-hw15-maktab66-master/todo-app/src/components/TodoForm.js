import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { FaPlus, FaEdit } from 'react-icons/fa'


export default class Tododiv extends Component {
 
  render() {
    return (
      <Container>
        <form onSubmit={this.props.handleSubmit} className="d-flex justify-content-center">
            <input type="text" placeholder="Add your new todo..." 
            value={this.props.item}
            onChange={this.props.handleChange} 
            />
           <button className='btnsubmit' type='submit'>{this.props.editItem ? <FaEdit /> : <FaPlus className="icon"/>}</button>
        </form>
      </Container>
    )
  }
}
