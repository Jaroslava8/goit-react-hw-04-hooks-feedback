import React from "react";
import PropTypes from "prop-types";
import styles from "../Feedback/Feedback.module.css";

const NotificationMessage = ({ message }) => {
  return <p className={styles.section}> {message}</p>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string,
};

export default NotificationMessage;
