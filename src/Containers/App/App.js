import React, { Component } from 'react';
import Header from '../Header/Header';
import AddTodo from '../AddTodo/AddToDo';
import ChangeToDo from '../ChangeToDo/ChangeToDo';
import Table from '../../Components/Table/Table';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentAdmin: false,
      todosToDisplay: 'default',
      amountOfPages: 1,
      currentFilter: 'id',
      pagesSpan: '1'
    }
  }

  //Page functions
  calculatePages = (amountOfPages) => {
    this.setState({amountOfPages: Math.ceil(amountOfPages / 3)});
    //create spans with pages
    let list = '';
    let counter = this.state.amountOfPages;
    let i = 1;
    while(i <= counter) {
      list += i;
      list += ' ';
      i += 1;
    }

    this.setState({pagesSpan: list});
  }

  changePage = (page) => {
    this.setState({page: page});
  }

  //Default todos fetch and changing the default state
  fetchTasksData = () => {
    fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Gleb')
    .then(result => result.json())
    .then(data => {
      this.setState({todosToDisplay: data.message.tasks});
      // this.setState({amountOfPages: Math.ceil(parseInt(data.message.total_task_count) / 3)})
      this.calculatePages(data.message.total_task_count);
    })
  }

  //Signing functions
  onSignIn = (login, password) => {
    if (login === 'admin' && password === '123') {
      this.setState({
        currentAdmin: true
      })
    }

    console.log(this.state)
  }

  onSignout = () => {
    this.setState({
      currentAdmin: '',
    })
    console.log(this.state)
  }

  //Built-in functions
  componentDidMount() {
    this.fetchTasksData();
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {

    return (
      <div>
          <Header
            onSignin={this.onSignIn.bind(this)}
            onSignout={this.onSignout.bind(this)}
            currentAdmin={this.state.currentAdmin}
          />
          <Table pagesSpan={this.state.pagesSpan} todosToDisplay={this.state.todosToDisplay}/>
          <AddTodo />
          <ChangeToDo />
      </div>
    )
  }
}

export default App;
