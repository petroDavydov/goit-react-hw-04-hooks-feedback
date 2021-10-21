import PropTypes from "prop-types";
import "./Statistics.module.css";

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
