import React from 'react';

export default class TodoRow extends React.Component {

  render() {
    return (
      <tr>
        <td>id</td>
        <td>todo</td>
        <td>aaa</td>
        <td className="form-group">
            <div className="checkbox">
                <label>
                    <input id="checkbox-complete" type="checkbox" />
                </label>
            </div>
        </td>
        <td className="btn-group-sm">
            <button className="btn-remove btn btn-danger btn-fab"><i className="material-icons">remove</i>
                <div className="ripple-container"></div>
            </button>
        </td>
      </tr>
      //    <tr>
      //        <td>{{id}}</td>
      //        <td>{{todo}}</td>
      //        <td>{{limitDate}}</td>
      //        <td class="form-group">
      //            <div class="checkbox">
      //                <label>
      //                    <input id="checkbox-complete" type="checkbox" {{#complete}}checked="checked" {{/complete}} />
      //                </label>
      //            </div>
      //        </td>
      //        <td class="btn-group-sm">
      //            <button class="btn-remove btn btn-danger btn-fab"><i class="material-icons">remove</i>
      //                <div class="ripple-container"></div>
      //            </button>
      //        </td>
      //      </tr>
      );
  }
}
