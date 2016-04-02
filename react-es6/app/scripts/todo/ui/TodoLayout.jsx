import React from 'react';
import TodoContents from './TodoContents.jsx';

export default class TodoLayout extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Todoリスト</h1>
        </div>
        <TodoContents />
      </div>
      );
  }
}
