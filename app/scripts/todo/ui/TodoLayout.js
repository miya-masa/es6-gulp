import {
    LayoutView
}
from 'backbone.marionette';
import layout from './templates/layout.hbs';

export
default LayoutView.extend({
    regions: {
        todoGridTable: '#todo-grid-table'
    },
    template: layout
});
