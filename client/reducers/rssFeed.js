const rssFeed = (state = [{ key: 1, text: 'test feed right here' },
{ key: 2, text: '22' },
{ key: 3, text: '33' }], action) => {
  switch (action.type) {
    // const newState = { ...state };
    case 'READ_ALL_RSS':
      return state;
    case 'ADD_RSS':
      return [
        ...state,
        action,
      ];
<<<<<<< d72509c0e20026f90c37e85332b41f6d06b3c8f1
    case 'GET_STATE_FROM_SERVER2':
      console.log('GET_STATE_FROM_SERVER was called in RSSFeed reducer');
      console.log('The action.payload that was recieved by the reducer: ', action.payload);
      // newState.userName = action.payload.userName;
      // console.log('NEWSTATE', newState);
      // return newState;
=======
    case 'GET_STATE_FROM_SERVER':
>>>>>>> took out some console logs because there were too many and it was confusing
    default:
      return state;
  }
};

export default rssFeed;
