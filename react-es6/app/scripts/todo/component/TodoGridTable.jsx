import React from 'react';
import TodoRow from './TodoRow.jsx';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableHeader from 'material-ui/lib/table/table-header';
import TableBody from 'material-ui/lib/table/table-body';
import TableRow from 'material-ui/lib/table/table-row';

export default class TodoGridTable extends React.Component {

  render() {
    const rows = this.props.todos.map((e) => <TodoRow todo={e} onTouchRemove={this.props.onTouchRemove} onChangeComplete={this.props.onChangeComplete} />);

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
  </Table>);
  }
}
