import propTypes from "prop-types";
import styles from "../Statistics/Statistics.module.css";

export default function Statictics({
  good,
  neutral,
  bad,
  total,
  positiveFeadbacks,
}) {
  return (
    <ul className={styles.section}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positiveFeadbacks}%</li>
    </ul>
  );
}

Statictics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positiveFeadbacks: propTypes.number.isRequired,
};
