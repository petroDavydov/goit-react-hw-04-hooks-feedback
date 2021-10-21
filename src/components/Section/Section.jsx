import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={s.wraperSection}>
      <h2 className={s.titleSection}>{title}</h2>
      {children}
    </div>
  );
}

Section.default = {
  title: 'Please Leave FeedBack',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
