import { forwardRef } from "react";

import Text from "./Text";

import styles from "./Input.module.css";
import Label from "./Label";

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <input {...props} />
    </div>
  );
});

export default Input;

Input.Text = Text;

Input.Label = Label;
