import React from 'react';
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
    console.log(this.state);
    const [todo, limitDate] = [this.state.todo, this.state.limitDate];
    TodoActions.createTodo(todo, limitDate);
    this.setState({
      open: false
    });
  }

  _onChange(event) {
    console.log(event);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  _onChangeDate(nouse, value) {
    console.log(value);
    this.setState({
      limitDate: "2000/1/1"
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
            <DatePicker hintText="Limit Date" id="limitDate" onChange={this._onChangeDate.bind(this)}/>
        </Dialog>
      </div>
      );
  };

//  render() {
//    return (
//      <div id="todo-dialog" className="btn-group-sm col-md-12">
//            <button className="btn btn-default btn-fab" data-toggle="modal" data-target="#create-todo-dialog"><i className="material-icons">add</i>
//                <div className="ripple-container"></div>
//            </button>
//            <div id="create-todo-dialog" className="modal fade in" tabIndex="-1"  style={{
//        display: 'none'
//      }}>
//                <div className="modal-dialog">
//                    <div className="modal-content">
//                        <div className="modal-header">
//                            <button type="button" className="btn-close close" data-dismiss="modal" aria-hidden="true">×</button>
//                            <h4 className="modal-title">Todo追加</h4>
//                        </div>
//                        <div className="modal-body">
//                            <form className="form-horizontal">
//                                <fieldset>
//                                    <legend>TodoListに追加しましょう。</legend>
//                                    <p className="error-message text-danger">
//                                    </p>
//                                    <div className="form-group">
//                                        <label htmlFor="inputTodo" className="col-md-2 control-label">Todo</label>
//                                        <div className="col-md-10">
//                                          <input ref={e => this.todoText = e} type="text" className="form-control" placeholder="Todo" />
//                                        </div>
//                                    </div>
//                                    <div className="form-group">
//                                        <label htmlFor="inputTodo" className="col-md-2 control-label">Limit Date</label>
//                                        <div className="col-md-10">
//                                          <input type="date" className="form-control" ref={e => this.limitDate = e}  placeholder="limitDate"/>
//                                        </div>
//                                    </div>
//                                </fieldset>
//                            </form>
//                        </div>
//                        <div className="modal-footer">
//                          <button type="button" className="btn-ok btn btn-primary" onClick={() => this.onClickAdd()}>OK
//                                <div className="ripple-container">
//                                    <div className="ripple ripple-on ripple-out" ></div>
//                                </div>
//                            </button>
//                            <button type="button" className="btn-cancel btn btn-primary" data-dismiss="modal">Cancel
//                                <div className="ripple-container">
//                                    <div className="ripple ripple-on ripple-out" ></div>
//                                </div>
//                            </button>
//                        </div>
//                    </div>
//                </div>
//            </div>
//          </div>
//      );
//  }
}
