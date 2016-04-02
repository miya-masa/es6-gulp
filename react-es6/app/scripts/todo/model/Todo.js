import { Model } from 'backbone';
import sequence from '../app/Sequence';

export default Model.extend({
  defaults: {
    complete: false
  },
  initialize() {
    if (!this.get('id')) {
      this.set('id', sequence.next());
    }
  },
  toggleComplete() {
    this.set('complete', !this.get('complete'));
  },
  validate() {
    let errorMessages = [];
    if (!this.get('todo')) {
      errorMessages.push('Todoは必須項目です。');
    }
    if (!this.get('limitDate')) {
      errorMessages.push('LimitDateが不正です。');
    }
    if (errorMessages.length > 0) {
      return errorMessages.join('');
    }
  }
});
