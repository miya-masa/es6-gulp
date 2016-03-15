import {
    CollectionView
}
from 'backbone.marionette';
import TodoGridRow from './TodoGridRow';
export
default CollectionView.extend({
    childView: TodoGridRow,
    tagName: 'tbody'
});
