import React from 'react';
import Setting from '../containers/SettingContainer';
import SettingDisp from '../containers/SettingsDispContainer.js';
import RSSHolder from '../containers/RSSHolder';
import SearchBar from '../components/SearchBar';

const App = () => (
  <div>
    <RSSHolder />
    <SearchBar />
    <Setting />
    <h1>Welcome, User</h1>
    <SettingDisp />
  </div>
);

export default App;
