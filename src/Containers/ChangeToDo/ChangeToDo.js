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
    let arr = [];
    (text) && arr.push(text);
    (status) && arr.push(status);
    arr.sort();
    let encodedArr = [];

    arr.forEach(item => {
      encodedArr.push(encodeURIComponent(item));
    })
    let signature = md5(encodedArr[0] === text ? encodeURIComponent('text') + '=' + encodedArr[0] +'&' +
                                      encodeURIComponent('status')+ '=' + encodedArr[1] + '&' +
                                      encodeURIComponent('token') + '=' + encodeURIComponent('beejee')
                                      : encodeURIComponent('status') + '=' + encodedArr[0] +'&' +
                                      encodeURIComponent('text')+ '=' + encodedArr[1] + '&' +
                                      encodeURIComponent('token') + '=' + encodeURIComponent('beejee'));

    let form = new FormData();
    (text) && form.append('text', text);
    (status) && form.append('status', status);
    form.append('signature', signature);
    form.append('token', 'beejee');

     //Fetching
     fetch(`https://uxcandy.com/~shapoval/test-task-backend/edit/${id}/?developer=Gleb`,
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
          <input type='text' name='text' placeholder='text' required/>
          <input type='number' name='status' placeholder='status 10 or 0' required/>
          <input type='submit' value='Change ToDo'/>
        </form>
      </div>
    )
  }
}
export default ChangeToDo;
