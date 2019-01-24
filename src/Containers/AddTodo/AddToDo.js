import React, {Component} from 'react';
import './AddToDo.css';

class AddTodo extends Component {
  handleAddTodo = (e) => {
    //Don't reload the page
    e.preventDefault();

    //Easier data view
    let email = e.target.email.value;
    let name = e.target.name.value;
    let text = e.target.text.value;

    this.props.addToDo(email, name, text)
  }

  render() {
    console.log('Props', this.props)
    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <input type='email' name='email' placeholder='email'/>
          <input type='text' name='name' placeholder='name'/>
          <input type='text' name='text' placeholder='text'/>
          <input type='submit' value='Add ToDo'/>
        </form>
      </div>
    )
  }
}
export default AddTodo
