// ============================================
import Container from "./components/Container";
// ============================================
import Section from "./components/Section";
// ============================================
import FeedBackOptions from "./components/FeedBackOptions";
// ============================================
import Statistics from "./components/Statistics";
// ============================================
import Notification from "./components/Notification";
// ============================================
import { useState } from "react";
// ============================================

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((good) => good + 1);
        break;

      case "neutral":
        setNeutral((neutral) => neutral + 1);
        break;

      case "bad":
        setBad((bad) => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please Leave Your Feedback">
        <FeedBackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="No FeedBack Given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            bab={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </Container>
  );
};

export default App;
