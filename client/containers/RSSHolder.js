import { connect } from 'react-redux';
import RSSFeedList from '../components/RSSFeedList';

const mapStateToProps = state => ({
  rssFeed: state.rssFeed,
  chosenRssFeeds: state.RSSFeedList,
});

export default connect(mapStateToProps)(RSSFeedList);
