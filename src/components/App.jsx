import React, { Component } from 'react';
import Section from './section/section';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Statistics from './statistics/statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const stateKeys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={{ good, neutral, bad }}
          />
        </Section>
        <Section title="Statistics">
          <Statistics options={stateKeys} />
        </Section>
      </>
    );
  }
}
