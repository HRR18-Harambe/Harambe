import { connect } from 'react-redux';
import SettingsDisp from '../components/SettingsDisp.jsx';
import { addButton, addURL, addInterest, addRSSFeedToInterest, deleteButton } from '../actions/index';

const mapDispatchToProps = dispatch => ({

  addButtonClick: (buttonName) => {
    dispatch(addButton(buttonName));
  },

  addURLClick: (URLName, buttonName) => {
    dispatch(addURL(URLName, buttonName));
  },

  deleteButtonClick: (buttonToDelete) => {
    dispatch(deleteButton(buttonToDelete));
  },

});

const mapStateToProps = state => ({
  active: state.toggle,
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDisp);
