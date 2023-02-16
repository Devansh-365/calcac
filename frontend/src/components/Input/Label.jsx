import styles from "./Input.module.css";

const Label = ({ label = "", htmlFor, children, ...props }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor} {...props}>
      {label}
      {children}
    </label>
  );
};

export default Label;
