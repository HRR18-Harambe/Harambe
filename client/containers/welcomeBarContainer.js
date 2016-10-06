import { connect } from 'react-redux';
import WelcomeBar from '../components/welcomeBar';

const mapStateToProps = state => ({
  welcomeBarState: state.currentUser,
});

<<<<<<< 74990cc81d136d47e8809ed78ea8e38f448673fb
<<<<<<< df0d5b2ac87c299fb62ce478233eab46453fbd32
export default connect(mapStateToProps)(WelcomeBar);
=======
export default connect(mapStateToProps, null)(WelcomeBar);
>>>>>>> (feat) made greeting dynamic and split into own component.
=======
export default connect(mapStateToProps)(WelcomeBar);
>>>>>>> ???
