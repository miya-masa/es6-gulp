/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
import {
    Application
}
from 'backbone.marionette';
import Backbone from 'backbone';
import TodoLayout from './todo/ui/TodoLayout';
import TodoGridTable from './todo/ui/TodoGridTable';
import TodoDialog from './todo/ui/TodoDialog';

var app = new Application();
app.on('start', () => {
    Backbone.history.start();
    let layout = new TodoLayout({
        el: '#contents'
    });
    layout.render();
    layout.showChildView('todoGridTable', new TodoGridTable());
    layout.showChildView('todoDialog', new TodoDialog());
});
app.start();
