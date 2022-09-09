import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { Container, Row } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';


export default class Todo extends Component {
  constructor(){
    super();
    this.state = {
      items:[],
      id: uuid(),
      item:'',
      editItem: false
    }
  };
   handleChange = (e) =>{
     this.setState({
       item: e.target.value
     });
   };

   handleSubmit = (e) => {
     e.preventDefault();
     const newItem = {
       id:this.state.id,
       title:this.state.item,
     };

     const updatedItems = [...this.state.items, newItem]
     this.setState({
       items:updatedItems,
       item:'',
       id: uuid(),
       editItem:false
     })
   }

   clearList=() => {
     this.setState({
       items:[]
     })
   }

   handleDelete = (id) => {
     const filteredItems = this.state.items.filter((item) =>
      item.id !== id)
      this.setState({items: filteredItems});
   };

   handleEdit = id =>{
    const filteredItems = this.state.items.filter((item) =>
    item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id)
    
    this.setState({
      items: filteredItems,
      item:selectedItem.title,
      editItem:true,
      id:id
    });
   }

  render() {
    return (
      <Container fluid className='p-0 mt-5'>
        <h1>Todo app</h1>
        <Container>
          <Row >
            <div className="d-flex justify-content-center mt-5">
            <TodoForm item={this.state.item} handleChange={this.handleChange} 
             handleSubmit={this.handleSubmit} 
             editItem={this.state.editItem} />
            </div>
            <div className="d-flex justify-content-center mt-4">
            <TodoList items={this.state.items} clearList={this.clearList}
            handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
            </div>
          </Row>
        </Container>
      </Container>
    )
  }
}

