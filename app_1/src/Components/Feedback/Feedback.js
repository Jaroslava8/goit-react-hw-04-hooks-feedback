import React from "react";
import PropTypes from "prop-types";
import Statistics from "../Statistics/Statistics";
import Container from "../Container/Container";
import FeedbackOptions from "./FeedbackOptions";
import NotificationMessage from "../Notification/NotificationMessage";
import styles from "../Feedback/Feedback.module.css";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = (event) => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };
  handleBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const totalFeedbacks =
      this.state.good + this.state.neutral + this.state.bad;

    return (
      <>
        <h2 className={styles.section}>Please leave feeedback</h2>
        <FeedbackOptions
          onIncrement={{
            good: this.handleGood,
            neutral: this.handleNeutral,
            bad: this.handleBad,
          }}
        />

        <h2 className={styles.section}>Statistics</h2>
        <Container
          note={
            totalFeedbacks === 0 ? (
              <NotificationMessage message={"There is no feedback"} />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                totalFeedbacks={totalFeedbacks}
                percentage={
                  totalFeedbacks === 0
                    ? 100
                    : Math.round((this.state.good / totalFeedbacks) * 100)
                }
              />
            )
          }
        />
      </>
    );
  }
}
Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Feedback;
