import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TodoContents from './TodoContents.jsx';

export default class TodoLayout extends React.Component {

  render() {
    return (
      <div className="container">
        <AppBar title="Todoリスト" showMenuIconButton={false} />
        <TodoContents />
      </div>
      );
  }
}
