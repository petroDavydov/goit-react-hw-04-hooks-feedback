import React, { Component } from 'react';
// ============================================
import Container from './components/Container';
// ============================================
import Section from './components/Section';
// ============================================
import FeedBackOptions from './components/FeedBackOptions';
// ============================================
import Statistics from './components/Statistics';
// ============================================
import Notification from './components/Notification';
// ============================================

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [currentBtnValue]: prevState[currentBtnValue] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const statesValueArr = Object.values(this.state);
    return statesValueArr.reduce((acc, value) => {
      acc += value;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const btnSense = Object.keys(this.state);
    const {
      onLeaveFeedback,
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <Container>
        <Section title="Please Leave Your Feedback">
          <FeedBackOptions
            options={btnSense}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {countTotalFeedback() === 0 ? (
          <Notification message="No FeedBack Given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              state={state}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
export default App;
