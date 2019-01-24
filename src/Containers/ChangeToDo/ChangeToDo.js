import React, {Component} from 'react';
import './ChangeToDo.css';

class ChangeToDo extends Component {

  handleChangeTodo = (e) => {
    //Don't reload the page
    e.preventDefault();

    //Easier data view
    let id = e.target.id.value;
    let text = e.target.text.value;
    let status = e.target.status.value;

    this.props.changeToDo(id, text, status);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleChangeTodo}>
          <input type='number' name='id' placeholder='id' required/>
          <input type='text' name='text' placeholder='text' required/>
          <input type='number' name='status' placeholder='status 10 or 0' required/>
          <input type='submit' value='Change ToDo'/>
        </form>
      </div>
    )
  }
}
export default ChangeToDo;
