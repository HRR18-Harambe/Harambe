import React, { PropTypes } from 'react';

const RSSFeed = ({ rssFeed }) => (
  <li key={rssFeed.id}>
    {rssFeed.text}
  </li>
);

RSSFeed.propTypes = {
  rssFeed: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    }).isRequired,
};

export default RSSFeed;
