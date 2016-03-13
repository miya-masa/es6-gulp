import {
    LayoutView
}
from 'backbone.marionette';
import grid from './templates/grid-table.hbs';
import Backbone from 'backbone';
import TodoGridRows from './TodoGridRows';
import EmptyView from './EmptyView';
export
default LayoutView.extend({
    template: grid,
    regions: {
        todoGridRows: '#todo-grid-rows'
    },
    onRender() {
        let gridRows = new TodoGridRows({
            collection: new Backbone.Collection([1, 2, 3])
        });
        gridRows.render();
        this.getRegion('todoGridRows').show(new EmptyView());
        this.getRegion('todoGridRows').$el.replaceWith(gridRows.el);
    }
});
