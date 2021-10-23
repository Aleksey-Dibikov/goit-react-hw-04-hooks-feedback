import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            className={s.button}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
