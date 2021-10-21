import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Statistics.module.css';

export default class Statistics extends Component {
  static defaultProps = {
    state: { good: 0, neutral: 0, bad: 0 },
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    state: PropTypes.objectOf(PropTypes.number),
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad } = this.props.state;
    const { total, positivePercentage } = this.props;

    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total:{total}</li>
        <li>Positive Feedback:{positivePercentage}</li>
      </ul>
    );
  }
}
