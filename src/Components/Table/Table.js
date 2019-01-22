import React from 'react';
import './Table.css';

const Table = (props) => {
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
              <td>{props.todosToDisplay[0]['username']}</td>
              <td>{props.todosToDisplay[0]['email']}</td>
              <td>{props.todosToDisplay[0]['text']}</td>
              <td>{props.todosToDisplay[0]['status'] === 10 ? 'Completed' : 'Not Completed'}</td>
            </tr>
            <tr>
              <td>{props.todosToDisplay[1]['username']}</td>
              <td>{props.todosToDisplay[1]['email']}</td>
              <td>{props.todosToDisplay[1]['text']}</td>
              <td>{props.todosToDisplay[1]['status'] === 10 ? 'Completed' : 'Not Completed'}</td>
            </tr>
            <tr>
              <td>{props.todosToDisplay[2]['username']}</td>
              <td>{props.todosToDisplay[2]['email']}</td>
              <td>{props.todosToDisplay[2]['text']}</td>
              <td>{props.todosToDisplay[2]['status'] === 10 ? 'Completed' : 'Not Completed'}</td>
          </tr>
          </tbody>
      </table>
      <p>{props.pagesSpan}</p>
    </div>
    );
  }

export default Table;
