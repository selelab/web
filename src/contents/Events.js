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

const Events = ({ classes }) => {
  document.title = 'イベント | 上智大学エレクトロニクスラボ';
  return (
    <div className={classes.root}>
      <Typography variant={"overline"}>INTRODUCING</Typography>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        イベント
      </Typography>
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
        2019年度
      </Typography>
      <Typography indent={"small"}>
        2019年5月 プログラミング講座 <a href="https://github.com/haruka-kb/elelab/find/master">Github</a> <br/>
        2020年2月 草津合宿 1年生向けに<a href="/kusatsu/app">WEBアプリケーション</a>を作るハッカソンを開催しました。<br/>
      </Typography>
    </div>
  )
};

export default withStyles(styles)(Events)