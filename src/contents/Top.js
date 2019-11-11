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

const Top = ({ classes }) => {
  document.title = '上智大学エレクトロニクスラボ';
  return (
    <div className={classes.root}>
      <Typography variant={"overline"}>INTRODUCING</Typography>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        上智大学 エレクトロニクスラボ
    </Typography>
      <Typography indent={"small"}>
        我々は2018年○月○日に結成し、現在では上智大学の理工学部や経済学部の学生を中心として、様々な大学の人が集まり、活動をしています。
    </Typography>
    </div>
  )
};

export default withStyles(styles)(Top);