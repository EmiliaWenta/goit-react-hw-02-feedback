import React from 'react';

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

export default FeedbackOptions;
