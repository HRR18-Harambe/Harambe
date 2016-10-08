const rssFeed = (state = {
  sports: [],
  tech: [],
  sports: [],
  finance: [],
}, action) => {
  switch (action.type) {
    case 'GET_STATE_FROM_SERVER':
      return action.payload.RSSFeeds;

    default:
      return state;
  }
};

export default rssFeed;
