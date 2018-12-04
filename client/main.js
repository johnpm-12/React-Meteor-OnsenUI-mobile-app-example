import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import ons from 'onsenui';
import { } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import { } from '/imports/api/collections.js';
import App from '/imports/ui/app.js';

Meteor.startup(() => {
    ons.ready(() => {
        render(<App />, document.getElementById('root'));
        if (Meteor.isCordova) {
            nativeclick.watch(['a', 'button', 'input', 'textarea', 'select', 'back-button', 'toolbar-button', 'list-item', 'tapsound']);
        }
    });
});
