import React from 'react';
import ButtonList from './ButtonList.jsx';
import RSSFeedList from './RSSFeedList.jsx';
import NotificationList from './NotificationList.jsx';
import SearchBar from './SearchBar.jsx';
import SettingsButton from './SettingsButton.jsx';
import settingsButtonReducer from '../reducers/settingsButtonReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const App = () =>
  (
  <div>
    <div><RSSFeedList /></div>
    <div><NotificationList /></div>
    <h1 className="greeting">Welcome, (user name here)</h1>
    <div><SearchBar /></div>
    <div><ButtonList /></div>
    <div id="settings" className = "settings"/>
    <div><SettingsButton /></div>
  </div>
);

import ReactDOM, { render } from 'react-dom'; //eslint-disable-line
// import { render } from 'react-dom';

ReactDOM.render(
<Provider store = {createStore(settingsButtonReducer)}>
  <App />
</Provider>,
document.getElementById('app')); //eslint-disable-line
