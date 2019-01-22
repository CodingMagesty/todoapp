import React, {Component} from 'react'
import './AddToDo.css';

class AddTodo extends Component {
  handleAddTodo(e) {
    //Don't reload the page
    e.preventDefault();

    //Easier data view
    let email = e.target.email.value;
    let name = e.target.name.value;
    let text = e.target.text.value;
    
    let form = new FormData();
    form.append('username', name);
    form.append('email', email);
    form.append('text', text);

    //Fetching
    fetch('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Gleb',
          {
            method: 'POST',
            crossDomain: true,
            body: form
          })
    .then(result => result.json())
    .then(json => console.log(json))
  }

  render() {
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
