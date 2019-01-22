import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  handleSignin(e) {
    e.preventDefault();
    let login = this.refs.login.value;
    let password = this.refs.password.value;
    this.props.onSignin(login, password);
  }

  handleSignout(e) {
    e.preventDefault();
    this.props.onSignout();
  }

  render() {
    if (this.props.currentAdmin === false) {
      return (
        <div className='header'>
          <a href='google.com' className='logo'>ToDoApp</a>
          <form className='login' onSubmit={this.handleSignin.bind(this)}>
            <input type='text' placeholder='login' ref='login'/>
            <input type='password' placeholder='password' ref='password'/>
            <input type='submit' value='Log in'/>
          </form>
        </div>
      );
    } else {
      return (
        <div className='header'>
          <a href='google.com' className='logo'>ToDoApp</a>
          <form className='login' onSubmit={this.handleSignout.bind(this)}>
            <input type='submit' value='Log out'/>
          </form>
        </div>
      );
    }
  }
}

export default Header;
