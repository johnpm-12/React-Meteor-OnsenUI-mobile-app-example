import React from 'react';
import { Button } from 'react-onsenui';

import { persistentCollection } from '/imports/api/collections.js';

export default class Subpage1 extends React.Component {
    getStorCounter() {
        if (this.props.localStor.length < 1) {
            return null;
        }
        return this.props.localStor[0].counter;
    }

    render() {
        return (
            <div>
                <p>Subpage1 content</p>
                <p>
                    <Button onClick={() => {
                        persistentCollection.update({}, { $inc: { 'counter': 1 } }, { upsert: true });
                    }}>Add to local storage counter</Button>
                </p>
                <p>Local storage counter: {this.getStorCounter()}</p>
            </div>
        );
    }
};
