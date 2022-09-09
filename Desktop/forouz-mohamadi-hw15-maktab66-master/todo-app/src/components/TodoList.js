import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export default class TodoList extends Component {
  render() {
    return (
      <Container className="todo-container d-flex justify-content-center">
        <ul>
         {this.props.items.map(item => {
           return(
            <li key={item.id} title={item.title} handleDelete={()=>this.props.handleDelete(item.id)}
            handleEdit={()=>this.props.handleEdit(item.id)} 
            className="List-group-item text-capitalize d-flex justify-content-between mb-2">
            <div>{item.title}</div>
            <div className="todo-icon">
              <span onClick={()=>this.props.handleEdit(item.id)} className="mx-2 edit">
                <FaEdit />
              </span>
              <span onClick={()=>this.props.handleDelete(item.id)} >
                <FaTrashAlt className="trash" />
              </span>
            </div>
          </li>
           )
         })} 
         <button onClick={this.props.clearList} 
         className='clearAll'>Clear List</button>
        </ul>
      </Container>
    )
  }
}
