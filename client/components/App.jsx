import React from 'react';
import Setting from '../containers/SettingContainer';
import SettingDisp from '../containers/SettingsDispContainer.js';
import RSSHolder from '../containers/RSSHolder';
import SearchBar from '../components/SearchBar';
import ButtonList from '../components/ButtonList';
import LinkButton from '../components/LinkButton';
import MagicButton from '../components/MagicButton.jsx';

const App = () => (
  <div>
    <RSSHolder />
    <SearchBar />
    <ButtonList />
    <MagicButton urls={['https://www.google.com', 'https://www.yahoo.com', 'https://www.bing.com']} />
    <Setting />
    <h1>Welcome, User</h1>
    <SettingDisp />
  </div>
);

export default App;
