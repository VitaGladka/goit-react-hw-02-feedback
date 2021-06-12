import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={s.buttonsAll}>
        {options.map(({ id, type, name }) => (
          <button type="button" className={s.button} key={id} onClick={() => onLeaveFeedback(type)}>
            {name}
          </button>
        ))}
      </div>
    );
  }
}
