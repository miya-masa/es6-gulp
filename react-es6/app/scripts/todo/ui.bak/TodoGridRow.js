import { ItemView } from 'backbone.marionette';
import channel from '../app/Channel';
import Backbone from 'backbone';
import row from './templates/grid-row.hbs';
export default ItemView.extend({
  tagName: 'tr',
  template: row,
  ui: {
    btnRemove: '.btn-remove',
    checkboxComplete: '#checkbox-complete'
  },
  events: {
    'click @ui.btnRemove': 'onClickBtnRemove',
    'click @ui.checkboxComplete': 'onClickCheckboxComplete'
  },
  modelEvents: {
    change: 'render'
  },
  onClickBtnRemove() {
    channel.trigger('todo:remove', this.model.id);
  },
  onClickCheckboxComplete() {
    channel.trigger('todo:complete', this.model.id);
  },
  onRender() {
    Backbone.$.material.checkbox(this.ui.checkboxComplete);
    this.$el.css('text-decoration',
      this.model.get('complete') ? 'line-through' : '');
  }
});
