import s from './FeedBackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedBackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttonStyleCommon}>
      {options.map((option, idx) => (
        <button
          className={s.button}
          type="button"
          value={option}
          key={idx}
          onClick={e => onLeaveFeedback(e)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedBackOptions.defaultProps = {
  options: [],
};

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
