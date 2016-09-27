/* eslint-env browser*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../reducers/settingsButtonReducer.js';
import { connect } from 'react-redux'

//will not work because store has not been created or imported anywhere

const SettingsButton = () => (

  <div className="settingsButton">
    <button
      onClick={() => store.dispatch({
        type: 'TOGGLE_SETTINGS',
      })}
    >Settings</button>
  </div>

);


// store.subscribe(() => {
//   const currentState = store.getState();
//   if (currentState[0].displaySettings === true) {
//     ReactDOM.render(<div>Settings!!!1</div>, document.getElementById('settings'));
//   } else {
//     ReactDOM.render(<div></div>, document.getElementById('settings'));
//   }
