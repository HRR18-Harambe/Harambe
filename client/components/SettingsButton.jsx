/* eslint-env browser*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../reducers/settingsButtonReducer.js';
import { connect } from 'react-redux';

class SettingsButton extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const {toggleSubmit} = this.props;
    return (
      <div className="settingsButton">
        <button onClick={toggleSubmit}>Settings</button>
      </div>
    )
  }
}

export default SettingsButton;
