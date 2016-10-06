import { connect } from 'react-redux';
import WelcomeBar from '../components/welcomeBar';

const mapStateToProps = state => ({
  welcomeBarState: state.currentUser,
});

<<<<<<< df0d5b2ac87c299fb62ce478233eab46453fbd32
export default connect(mapStateToProps)(WelcomeBar);
=======
export default connect(mapStateToProps, null)(WelcomeBar);
>>>>>>> (feat) made greeting dynamic and split into own component.
