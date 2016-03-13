import {
    ItemView
}
from 'backbone.marionette';
import row from './templates/grid-row.hbs';
export
default ItemView.extend({
    tagName: 'tr',
    template: row
});
