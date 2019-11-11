import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const styles = ({ breakpoints }) => ({
  root: {
    padding: 16,
    [breakpoints.up("sm")]: {
      padding: 24,
      maxWidth: 500,
      margin: "auto"
    },
    [breakpoints.up("md")]: {
      maxWidth: 700
    }
  }
});

const NotFound = ({ classes }) => {
  document.title = '上智大学エレクトロニクスラボ';
  return (
    <div className={classes.root}>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        404 - Not Found
    </Typography>
      <Typography indent={"small"}>
        ページが見つかりませんでした。URLをご確認ください。
    </Typography>
    </div>
  )
};

export default withStyles(styles)(NotFound);