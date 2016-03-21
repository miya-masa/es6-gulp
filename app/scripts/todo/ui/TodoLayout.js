import { LayoutView } from 'backbone.marionette';
import layout from './templates/layout.hbs';

export default LayoutView.extend({
  template: layout,
  regions: {
    todoDialog: '#todo-dialog',
    todoGridTable: '#todo-grid-table'
  }
});
