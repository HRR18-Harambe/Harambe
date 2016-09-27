/* eslint-env browser*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../reducers/settingsButtonReducer.js';
import { connect } from 'react-redux';


class SettingsButton extends Component {

  constructor(props){
    super(props);
    console.log(this.state)
  }

  render(){
    return (
      <div className="settingsButton">
        <button
          onClick={() => store.dispatch({
            type: 'TOGGLE_SETTINGS',
          })}
        >Settings</button>
      </div>
    )
  }
}

export default SettingsButton;

// const SettingsButton = () => (

//   //const { store } = this.context;

//   <div className="settingsButton">
//     <button
//       onClick={() => store.dispatch({
//         type: 'TOGGLE_SETTINGS',
//       })}
//     >Settings</button>
//   </div>

// );


// store.subscribe(() => {
//   const currentState = store.getState();
//   if (currentState[0].displaySettings === true) {
//     ReactDOM.render(<div>Settings!!!1</div>, document.getElementById('settings'));
//   } else {
//     ReactDOM.render(<div></div>, document.getElementById('settings'));
//   }
