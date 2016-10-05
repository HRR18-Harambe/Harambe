const addButtonClick = (state = {
  buttons:
  { test: ['www.google.com', 'cnn.com'],
    testBtn2: ['www.hn.com', 'www.bing.com'],
  },
}, action) => {
  const newState = { ...state };
  if (Array.isArray(action.payload)) {
    newState.buttons[action.payload[0]].push(action.payload[1]);
  } else {
    newState.buttons[action.payload] = [];
  }
  switch (action.type) {
    case 'ADD_BUTTON_CLICK':
      return newState;
    case 'ADD_URL_CLICK':
      return newState;
    case 'GET_STATE_FROM_SERVER':
      // console.log('GET_STATE_FROM_SERVER was called in addButtonClick reducer');
      console.log('The action.payload that was recieved by the reducer: ', action.payload);
      newState.userName = action.payload.user.userName;
      console.log('NEWSTATE', newState);
      return newState;
    default:
      return state;
  }
};

export default addButtonClick;
