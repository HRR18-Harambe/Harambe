const settingsButtonReducer = (currentState = [{ displaySettings: false }], action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS':
      return [
        {
          displaySettings: !currentState[0].displaySettings,
        },
      ];

    default:
      return currentState;
  }
};

export default settingsButtonReducer;