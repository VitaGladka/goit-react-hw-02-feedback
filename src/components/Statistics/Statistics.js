import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./Statistics.module.css";

export default class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <ul className={s.statistics}>
          <li>
            <span className={s.spanGood}>Good</span>: {good}
          </li>
          <li>
            <span className={s.spanNeutral}>Neutral</span>: {neutral}
          </li>
          <li>
            <span className={s.spanBad}>Bad</span>: {bad}
          </li>
          <li>
            <span className={s.spanTotal}>Total</span>: {total}
          </li>
          <li>
            <br />
            <span className={s.spanFeedback}>Positive feedback</span>: {positivePercentage}%
          </li>
        </ul>
      </div>
    );
  }
}
