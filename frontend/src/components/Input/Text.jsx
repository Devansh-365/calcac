import { forwardRef } from "react";
import classNames from "classnames";
import { defaultInputProps } from "../../constants/defaults";
import styles from "./Input.module.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Text = forwardRef(
  (
    {
      withPreIcon = false,
      withPostIcon = false,
      withSearchIcon = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames({
          [styles.input]: true,
          [styles.withPreIcon]: withPreIcon,
          [styles.withPostIcon]: withPostIcon,
          [styles.withSearchIcon]: withSearchIcon,
        })}
      >
        {withPreIcon}
        {withSearchIcon && (
          <MagnifyingGlassIcon
            className={styles.icon}
            style={{ width: 20, height: 20 }}
          />
        )}
        <input type="text" {...props} />
        {withPostIcon}
      </div>
    );
  }
);

export default Text;

Text.displayName = "Text";

Text.defaultProps = {
  ...defaultInputProps,
  placeholder: "donald.duck@work.com",
};
