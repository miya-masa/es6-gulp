import React from 'react';
import TodoActions from '../app/TodoActions';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentRemove from 'material-ui/lib/svg-icons/content/remove';
import Checkbox from 'material-ui/lib/checkbox';

export default class TodoGridTable extends React.Component {

  _onChange(todo, value) {
    TodoActions.completeTodo(todo.id, value);
  }

  _onTouchRemove(todo) {
    TodoActions.removeTodo(todo.id);
  }

  render() {
    const lineThrough = todo => todo.complete ? 'line-through' : 'none';
    const lineThroughStyle = e => ({
      'textDecoration': lineThrough(e)
    });
    const rows = this.props.todos.map(e => <TableRow key={e.id}> 
        <TableRowColumn style={lineThroughStyle(e)}>{e.id}</TableRowColumn>
        <TableRowColumn style={lineThroughStyle(e)}>{e.todo}</TableRowColumn>
        <TableRowColumn style={lineThroughStyle(e)}>{e.limitDate}</TableRowColumn>
        <TableRowColumn>
          <Checkbox defaultChecked={e.complete} onCheck={(event, value) => this._onChange(e, value) }/>
        </TableRowColumn>
        <TableRowColumn>
          <FloatingActionButton mini={true} secondary={true} onTouchTap={(event, value) => this._onTouchRemove(e) }>
            <ContentRemove />
          </FloatingActionButton>
        </TableRowColumn>
  </TableRow>);
    return (
      <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow >
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Todo</TableHeaderColumn>
        <TableHeaderColumn>Limit Date</TableHeaderColumn>
        <TableHeaderColumn>Complete</TableHeaderColumn>
        <TableHeaderColumn>Delete</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} >
      {rows}
    </TableBody>
  </Table>
      );
  }
}
