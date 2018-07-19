import React from "react";
import Tooltip from 'react-tooltip';
import ClickAwayListener from "react-clickaway";
import onClickOutside from "react-onclickoutside";

class TriggersTooltips extends React.Component {
  state = {
    open: false
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <ClickAwayListener onClickOutside={this.handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true
              }}
              onClose={this.handleTooltipClose}
              open={this.state.open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Add"
            >
              <p onSelect={this.handleTooltipOpen}>Click</p>
            </Tooltip>
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

export default TriggersTooltips;
