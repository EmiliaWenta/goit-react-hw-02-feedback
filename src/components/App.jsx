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
    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions />
        </Section>
        <Section title="Statistics">
          <Statistics />
        </Section>
      </>
    );
  }
}
