import React from "react";
import styles from "./styles.module.css";
function Message({ text, type }) {
  return <div className={styles[type]}>{text}</div>;
}

Message.defaultProps = {
  type: "warning",
};

export default Message;
