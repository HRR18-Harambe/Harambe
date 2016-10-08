const rssFeed = (state = {
  news: ["newsnewsnewsnews", "morenews"],
  tech: ["techtechtech", "moretechnews"],
  sports: [],
  finance: [],
  stocks: [],
}, action) => {

  switch (action.type) {
    case 'GET_STATE_FROM_SERVER':
      return action.payload.RSSFeeds ? action.payload.RSSFeeds : state

    default:
      return state;
  }
};

export default rssFeed;
