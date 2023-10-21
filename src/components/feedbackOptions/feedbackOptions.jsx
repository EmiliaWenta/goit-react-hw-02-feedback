import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, click }) => {
  return (
    <div>
      {options.map(item => (
        <button onClick={click} type="button" key={item}>
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  click: PropTypes.func.isRequired,
};

export default FeedbackOptions;
