import React, {Component} from 'react'
import md5 from 'js-md5';
import './ChangeToDo.css';

class ChangeToDo extends Component {

  handleChangeTodo(e) {
    //Don't reload the page
    e.preventDefault();

    //Easier data view
    let id = e.target.id.value;
    let text = e.target.text.value;
    let status = e.target.status.value;

    //Forming signature
    let arr = [text, status].sort();
    if (arr[0] === text) {
      arr = ['text' + text, 'status' + status];
    } else {
      arr = ['status' + status, 'text' + text];
    }
    let signature = encodeURIComponent(arr.join('') + 'tokenbeejee');
    console.log(signature);
    let form = new FormData();
    form.append('token', 'beejee');
    // form.append('signature', signature);
    (text) && form.append('text', status);
    (status) && form.append('status', status);


     //Fetching
     fetch(`https://uxcandy.com/~shapoval/test-task-backend/edit?id=${id}&developer=Name`,
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
        <form onSubmit={this.handleChangeTodo}>
          <input type='number' name='id' placeholder='id' required/>
          <input type='text' name='text' placeholder='text'/>
          <input type='number' name='status' placeholder='status 10 or 0'/>
          <input type='submit' value='Change ToDo'/>
        </form>
      </div>
    )
  }
}
export default ChangeToDo;
