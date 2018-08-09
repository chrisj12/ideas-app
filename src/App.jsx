import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import IdeasList from './components/IdeasList/IdeasList';
import Notification from './components/Notification/Notification';
// import AddIdeaNew from './components/AddIdeaNew/AddIdeaNew';

import Header from './components/Header/Header';
import configureStore from './store/configureStore';


const store = configureStore();

const App = () => (
    <Provider store={store}>
        <div className="fluid-container">
            <Header />
            <div className="notification-wrapper">
                <Notification />
            </div>
            <IdeasList />
        </div>
    </Provider>
);


ReactDOM.render(<App />, document.querySelector('#app'));
