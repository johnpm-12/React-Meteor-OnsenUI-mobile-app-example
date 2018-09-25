import React from 'react';
import { Button } from 'react-onsenui';

import { memoryCollection } from '/imports/api/collections.js';

export default class Subpage2 extends React.Component {
    getMemCounter() {
        if (this.props.memStor.length < 1) {
            return null;
        }
        return this.props.memStor[0].counter;
    }

    render() {
        return (
            <div>
                <p>Subpage2 content</p>
                <p>
                    <Button onClick={() => {
                        memoryCollection.update({}, { $inc: { 'counter': 1 } }, { upsert: true });
                    }}>Add to memory storage counter</Button>
                </p>
                <p>memory storage counter: {this.getMemCounter()}</p>
            </div>
        );
    }
};
