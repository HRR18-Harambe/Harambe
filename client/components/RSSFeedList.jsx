import React, { PropTypes } from 'react';
// import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed, chosenRssFeeds }) => (
  <div className="RSSFeedList">
    <div
      className="marquee marquee-speed-slow" data-marquee={
        JSON.stringify(chosenRssFeeds)
        // rssFeed[chosenRssFeeds[0]].map(feed => feed).join(' * ')
      }
    /><div
      className="marquee" data-marquee={
        JSON.stringify(chosenRssFeeds)
        // rssFeed[chosenRssFeeds[1]].map(feed => feed).join(' * ')
      }
    /></div>
);

RSSFeedList.propTypes = {
  rssFeed: PropTypes.objectOf(PropTypes.array),
};

export default RSSFeedList;
