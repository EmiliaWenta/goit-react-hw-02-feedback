import React from 'react';

const Statistics = ({ options }) => {
  return (
    <div>
      {options.map(item => (
        <p key={item}>{item}:</p>
      ))}
    </div>
  );
};

export default Statistics;
