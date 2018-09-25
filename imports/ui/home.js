import React from 'react';
import { Button, Row, Col } from 'react-onsenui';

import Subpage1 from './subpage1.js';
import Subpage2 from './subpage2.js';

export default class Home extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <p>
                    <Button onClick={() => this.props.navigator.pushPage({ component: Subpage1, key: '/subpage1', title: 'Subpage1' })}>Go to subpage 1</Button>
                </p>
                <p>
                    <Button onClick={() => this.props.navigator.pushPage({ component: Subpage2, key: '/subpage2', title: 'Subpage2' })}>Go to subpage 2</Button>
                </p>
            </div>
        );
    }
};
