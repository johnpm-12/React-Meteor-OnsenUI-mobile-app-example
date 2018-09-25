import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Navigator, Page, Toolbar, BackButton, Icon } from 'react-onsenui';

import { memoryCollection, persistentCollection } from '/imports/api/collections.js';
import Home from './home.js';

class App extends React.Component {
    render() {
        return (
            <Navigator
                initialRoute={{ component: Home, key: '/', title: 'Home' }}
                renderPage={(route, navigator) => {
                    return (
                        <Page
                            key={route.key}
                            renderToolbar={() =>
                                <Toolbar>
                                    {route.key !== '/' ? (
                                        <div className='left'>
                                            <BackButton>Back</BackButton>
                                        </div>
                                    ) : null}
                                    <div className='center'><Icon icon='ion-shuffle'/> {route.title}</div>
                                </Toolbar>
                            }
                        >
                            <div>
                                <route.component navigator={navigator} {...route.props} localStor={this.props.localStor} memStor={this.props.memStor} />
                            </div>
                        </Page>
                    );
                }}
            />
        );
    }
}

export default withTracker(() => {
    return {
        localStor: persistentCollection.find({}).fetch(),
        memStor: memoryCollection.find({}).fetch()
    };
})(App);
