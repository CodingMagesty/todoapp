import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import AddTodo from '../AddTodo/AddToDo';
import ChangeToDo from '../ChangeToDo/ChangeToDo';
import Table from '../Table/Table';
import { fetchData, changePage, changeFilter } from '../../Actions/Api';

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
    this.props.changePage();
  }

  // Is called when any page filter is clicked and causes page to rerender
  // with new currentFilter state
  changeFilter = (filter) => {
    this.setState({currentFilter: filter}, function () {
      this.fetchTasksData();
    });
  }

  //Fetch data about todos
  // fetchTasksData = () => {
  //   fetch(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Gleb&page=${this.state.currentPage}&sort_field=${this.state.currentFilter}`)
  //   .then(result => result.json())
  //   .then(data => {
  //     this.setState({todosToDisplay: data.message.tasks});
  //     // this.setState({amountOfPages: Math.ceil(parseInt(data.message.total_task_count) / 3)})
  //     this.calculatePages(data.message.total_task_count);
  //   })
  // }

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
    // Fetch data for the first time
    this.props.fetchData(1, 'id');
    console.log(this.props)
  }

  componentDidUpdate() {
    console.log('Props', this.props.todosToDisplay[0]['username'])
  }

  render() {
    return (
      <div>
          <Header
            currentAdmin={this.state.currentAdmin}
            onSignin={this.onSignIn.bind(this)}
            onSignout={this.onSignout.bind(this)}
          />
          <Table
            pagesSpan={this.props.pagesSpan}
            todosToDisplay={this.props.todosToDisplay}
            changePage={this.props.changePage}
            changeFilter={this.props.changeFilter}
          />
          {this.state.currentAdmin ? <ChangeToDo /> : <AddTodo />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todosToDisplay: state.displayToDos,
    page: state.changePage,
    pagesSpan: state.calculatePages,
    amountOfPages: state.amountOfPages,
    filter: state.changeFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData(1, 'id')),
    changePage: () => dispatch(changePage()),
    changeFilter: () => dispatch(changeFilter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
