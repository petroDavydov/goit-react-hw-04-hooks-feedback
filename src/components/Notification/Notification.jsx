import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Notification.module.css';

export default class Notification extends Component {
  static defaultProps = {
    message: '',
  };
  static propsType = {
    message: PropTypes.any.isRequired,
  };

  render() {
    return <h2>{this.props.message}</h2>;
  }
}
