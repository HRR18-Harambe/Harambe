import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class DialogExampleCustomWidth extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="AboutBTN">
        <IconButton onTouchTap={this.handleOpen}>
        <InfoIcon />
        </IconButton>
        <Dialog
          title="Dialog With Custom Width"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          This dialog spans the entire width of the screen.
        </Dialog>
      </div>
    );
  }
}