import React, { Component } from "react";
import Option from "./pauseOptions";

const pauseOptions = [
  {
    value: "Resume",
  },
  {
    value: "Info",
    sendTo: "#personalInfo",
  },
  {
    value: "Stats",
    sendTo: "#stats",
  },
  {
    value: "Quests",
    sendTo: "#quests",
  },
  {
    value: "Mailbox",
    sendTo: "#mailbox",
  },
];

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: "",
    };

    this.onHover = this.onHover.bind(this);
  }

  onHover(optionValue) {
    this.setState({
      isChecked: optionValue,
    });
  }

  render() {
    return (
      <div
        style={{ display: this.props.display }}
        className="entireModal pause"
      >
        <div className="container pauseMenu">
          <h2 style={{ textDecoration: "underline" }}>Paused</h2>
          {pauseOptions.map((pauseOption) => {
            return (
              <Option
                key={pauseOption.value}
                to={pauseOption.sendTo}
                click={this.props.click}
                hover={this.onHover}
                value={pauseOption.value}
                checked={pauseOption.value === this.state.isChecked}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Modal;
