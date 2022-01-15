import React, { useState } from "react";
import Statictics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/Feedback/FeedbackOptions";
import Container from "./Components/Container/Container";
import Notification from "./Components/Notification/NotificationMessage";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (name) => {
    switch (name) {
      case "good":
        setGood((state) => state + 1);
        return;
      case "neutral":
        setNeutral((state) => state + 1);
        return;
      case "bad":
        setBad((state) => state + 1);
        return;
      default:
        return;
    }
  };

  const totalFeedbacks = () => {
    return good + neutral + bad;
  };

  const percentage = () => {
    const total = totalFeedbacks();
    const result = (good / total) * 100;
    return Math.round(result);
  };

  return (
    <>
      <Container title="Please leave feeback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          leaveFeedback={leaveFeedback}
        />
      </Container>
      {good === 0 && bad === 0 && neutral === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Container title="Statictics">
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks()}
            positiveFeadbacks={percentage()}
          />
        </Container>
      )}
    </>
  );
}
