import {
    ItemView
}
from 'backbone.marionette';
import dialog from './templates/dialog.hbs';
export
default ItemView.extend({
    template: dialog,
    ui: {
        btnOk: '.btn-ok',
        btnCancel: '.btn-cancel',
        btnClose: '.btn-close'
    },
    events: {
        'click @ui.btnOk': 'onClickBtnOk',
        'click @ui.btnCancel': 'onClickBtnCancel',
        'click @ui.btnClose': 'onClickBtnCancel'
    },
    onClickBtnOk() {
        this.triggerMethod('submit:todo', 'todo');
    },
    onClickBtnCancel() {
        console.log('Cancel');
    }
});
