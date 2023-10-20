import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  handleClick(rating) {
    const object = this.props.onLeaveFeedback;
    object[rating] = object[rating] + 1;

    return object;
  }

  render() {
    
    return (
      <div>
        {this.props.options.map(item => (
          <button
            onClick={() => this.handleClick(item)}
            type="button"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
