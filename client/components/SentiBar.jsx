import React, { PropTypes } from 'react';


const SentiBar = ({ SentiBarState }) => (
  // SentiBarState has the object with anger fear bla bla bla
  <div>
    <div>
      {SentiBarState.anger}
    </div>
    <div>
      {SentiBarState.disgust}
    </div>
    <div>
      {SentiBarState.fear}
    </div>
    <div>
      {SentiBarState.joy}
    </div>
    <div>
      {SentiBarState.sadness}
    </div>
  </div>
);

SentiBar.propTypes = {
  SentiBarState: PropTypes.objectOf(PropTypes.array),
};

export default SentiBar;
