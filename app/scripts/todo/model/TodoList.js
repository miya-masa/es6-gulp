import {
    Collection
}
from 'backbone';
import Todo from './Todo'
export
default Collection.extend({
    model: Todo
        // channelのイベントをリスンして状態を変更する
});
