import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignin(e) {
    e.preventDefault();
    let login = this.refs.login.value;
    let password = this.refs.password.value;
    if (login === 'admin' && password === '123') {
      this.props.onSignin();
    }
  }

  handleSignout(e) {
    e.preventDefault();
    this.props.onSignout();
  }

  render() {
    if (this.props.sign === false) {
      return (
        <div className='header'>
          <a href='google.com' className='logo'>ToDoApp</a>
          <form className='login' onSubmit={this.handleSignin}>
            <input type='text' placeholder='login' ref='login'/>
            <input type='password' placeholder='password' ref='password'/>
            <button type="submit">Log in</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className='header'>
          <a href='google.com' className='logo'>ToDoApp</a>
          <form className='login' onSubmit={this.handleSignout}>
            <button type="submit">Log out</button>
          </form>
        </div>
      );
    }
  }
}

export default Header;
