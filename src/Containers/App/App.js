import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import AddTodo from '../AddTodo/AddToDo';
import ChangeToDo from '../ChangeToDo/ChangeToDo';
import Table from '../Table/Table';
import { fetchData, changePage, changeFilter } from '../../Actions/Api';
import { sign_in, sign_out } from '../../Actions/Sign';
import { addToDo, changeToDo } from '../../Actions/ToDo';

class App extends Component {
  //Built-in functions
  componentDidMount() {
    // Fetch data for the first time
    this.props.fetchData();
    console.log(this.props)
  }

  render() {
    return (
      <div>
          <Header
            sign={this.props.sign}
            onSignin={this.props.sign_in}
            onSignout={this.props.sign_out}
          />
          <Table
            pagesSpan={this.props.pagesSpan}
            todosToDisplay={this.props.todosToDisplay}
            changePage={this.props.changePage}
            changeFilter={this.props.changeFilter}
          />
          {this.props.sign ? <ChangeToDo changeToDo={this.props.changeToDo}/> : <AddTodo addToDo={this.props.addToDo}/>}
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
    filter: state.changeFilter,
    sign: state.sign
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log();
  return{
    fetchData: () => dispatch(fetchData()),
    changePage: (page) => {
      dispatch(changePage(page));
      dispatch(fetchData());
    },
    changeFilter: (text) => {
      dispatch(changeFilter(text));
      dispatch(fetchData());
    },
    sign_in: () => dispatch(sign_in()),
    sign_out: () => dispatch(sign_out()),
    addToDo: (email, username, text) => {
      dispatch(addToDo(email, username, text))
      dispatch(fetchData())
    },
    changeToDo: (id, text, status) => {
      dispatch(changeToDo(id, text, status));
      dispatch(fetchData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
