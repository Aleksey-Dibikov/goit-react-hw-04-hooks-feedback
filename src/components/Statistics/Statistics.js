import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from '../Statistics/Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.statisticList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  )
}

// === class ===
// class Statistics extends Component {
//   render() {
//     const { good, neutral, bad, total, positivePercentage } = this.props;
//     return (
//       <ul className={s.statisticList}>
//         <li>Good: {good}</li>
//         <li>Neutral: {neutral}</li>
//         <li>Bad: {bad}</li>
//         <li>Total: {total}</li>
//         <li>Positive feedback: {positivePercentage}%</li>
//       </ul>
//     );
//   }
// }
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
