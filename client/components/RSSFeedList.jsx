import React, { PropTypes } from 'react';
// import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed }) => (
  <div className="RSSFeedList">
    <div
      className="marquee marquee-speed-slow" data-marquee={
        rssFeed.news.map(feed => feed).join(' * ')
      }
    /><div
      className="marquee" data-marquee={
        rssFeed.tech.map(feed => feed).join(' * ')
      }
    /></div>
);

RSSFeedList.propTypes = {
  rssFeed: PropTypes.objectOf(PropTypes.array),
};

export default RSSFeedList;
