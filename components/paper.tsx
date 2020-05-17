import React from "react";
import cx from "classnames";
import Paper from "@material-ui/core/Paper";

const PREFIX_CLASS = "customize-paper";

const CustomizedPaper = ({
  className,
  children
}: {
  className?: string;
  children: any;
}) => {
  return (
    <Paper className={cx(PREFIX_CLASS, className)} variant="outlined">
      {children}
    </Paper>
  );
};

export default CustomizedPaper;
