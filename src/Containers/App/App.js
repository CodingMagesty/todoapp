import React, { Component } from 'react';
import Header from '../Header/Header';
import AddTodo from '../AddTodo/AddToDo';
import ChangeToDo from '../ChangeToDo/ChangeToDo';
import Table from '../Table/Table';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentAdmin: false,
      todosToDisplay: 'default',
      amountOfPages: 1,
      currentFilter: 'id',
      pagesSpan: [],
      currentPage: 1
    }
  }

  //Page functions
  calculatePages = (amountOfPages) => {
    this.setState({amountOfPages: Math.ceil(amountOfPages / 3)});
    //create spans with pages
    let list = [];
    let counter = this.state.amountOfPages;
    let i = 1;
    while(i <= counter) {
      list.push(i);
      i += 1;
    }

    this.setState({pagesSpan: list});
  }

  // Is called when any page button is clicked and causes page to rerender
  // with new currentPage state
  changePage = (page) => {
    this.setState({currentPage: page}, function () {
      this.fetchTasksData();
    });
  }

  // Is called when any page filter is clicked and causes page to rerender
  // with new currentFilter state
  changeFilter = (filter) => {
    this.setState({currentFilter: filter}, function () {
      this.fetchTasksData();
    });
  }

  //Fetch data about todos
  fetchTasksData = () => {
    fetch(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Gleb&page=${this.state.currentPage}&sort_field=${this.state.currentFilter}`)
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
  }

  onSignout = () => {
    this.setState({
      currentAdmin: false,
    })
  }

  //Built-in functions
  componentDidMount() {
    //Fetch data for the first time
    this.fetchTasksData();
  }

  render() {
    return (
      <div>
          <Header
            onSignin={this.onSignIn.bind(this)}
            onSignout={this.onSignout.bind(this)}
            currentAdmin={this.state.currentAdmin}
          />
          <Table
            pagesSpan={this.state.pagesSpan}
            todosToDisplay={this.state.todosToDisplay}
            changePage={this.changePage.bind(this)}
            changeFilter={this.changeFilter.bind(this)}
          />
          {this.state.currentAdmin ? <ChangeToDo /> : <AddTodo />}
      </div>
    )
  }
}

export default App;
