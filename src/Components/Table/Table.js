import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  render() {
    const pages = this.props.pagesSpan.map((item) =>(
            <li key={item.name}>{item.name}</li>
        ));

    return (
      <div>
        <table>
           <tbody>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>TEXT</th>
                <th>STATUS</th>
              </tr>
              <tr>
                <td>{this.props.todosToDisplay[0]['username']}</td>
                <td>{this.props.todosToDisplay[0]['email']}</td>
                <td>{this.props.todosToDisplay[0]['text']}</td>
                <td>{this.props.todosToDisplay[0]['status'] === 10 ? 'Completed' : 'Not Completed'}</td>
              </tr>
              <tr>
                <td>{this.props.todosToDisplay[1]['username']}</td>
                <td>{this.props.todosToDisplay[1]['email']}</td>
                <td>{this.props.todosToDisplay[1]['text']}</td>
                <td>{this.props.todosToDisplay[1]['status'] === 10 ? 'Completed' : 'Not Completed'}</td>
              </tr>
              <tr>
                <td>{this.props.todosToDisplay[2]['username']}</td>
                <td>{this.props.todosToDisplay[2]['email']}</td>
                <td>{this.props.todosToDisplay[2]['text']}</td>
                <td>{this.props.todosToDisplay[2]['status'] === 10 ? 'Completed' : 'Not Completed'}</td>
            </tr>
            </tbody>
        </table>
        <ul>{pages}</ul>
      </div>
    );
  }
}

export default Table;
