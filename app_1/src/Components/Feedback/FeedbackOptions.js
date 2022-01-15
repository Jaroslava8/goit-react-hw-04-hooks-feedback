import propTypes from "prop-types";
import styles from "../Feedback/Feedback.module.css";

export default function FeedbackOptions({ options, leaveFeedback }) {
  const buttonOption = Object.keys(options);
  return (
    <ul className={styles.section}>
      {buttonOption.map((name) => {
        return (
          <li key={name}>
            <button
              className={styles.button}
              type="button"
              onClick={() => leaveFeedback(name)}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.object.isRequired,
  leaveFeedback: propTypes.func.isRequired,
};
