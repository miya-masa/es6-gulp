import React from 'react';
import moment from 'moment';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import TodoActions from '../app/TodoActions';

export default class TodoContents extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleSubmit() {
    const [todo, limitDate] = [this.state.todo, this.state.limitDate];
    TodoActions.createTodo(todo, limitDate);
    this.setState({
      open: false
    });
  }

  _onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  _onChangeDate(nouse, selectedDate) {
    const limitDate = moment(selectedDate).format('YYYY/MM/DD');
    this.setState({
      limitDate
    });
  }

  render() {

    const actions = [
      <FlatButton
      label="Cancel"
      secondary={true}
      onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
      label="Submit"
      primary={true}
      disabled={false}
      onTouchTap={this.handleSubmit.bind(this)}
      />,
    ];

    const style = {
      marginLeft: 20,
      marginTop: 10,
    };

    return (
      <div>
        <FloatingActionButton style={style} onTouchTap={this.handleOpen.bind(this)} >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog title="Todo追加" actions={actions} modal={true} open={this.state.open}  >
          <h3>Todo追加してみよう</h3>
            <TextField hintText="Todo Text" id="todo" onChange={this._onChange.bind(this)}/>
            <DatePicker hintText="Limit Date" id="limitDate" onChange={this._onChangeDate.bind(this)} DateTimeFormat={Intl.DateTimeFormat} locale="ja"/>
        </Dialog>
      </div>
      );
  };

}
