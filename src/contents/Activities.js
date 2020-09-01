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
    },
    color: "#fff",
  },
  textGreen: {
    color: '#92D050',
  },
  container: {
    margin: '20px 0px 20px 0px',
  },

});

const Activities = ({ classes }) => {
  document.title = '活動内容 | 上智大学エレクトロニクスラボ';
  return (
    <div className={classes.root}>
      <Typography variant={"overline"} className={classes.textGreen}>INTRODUCING</Typography>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        活動内容
      </Typography>

      <hr/>

      <div className={classes.container}>
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
       電子工作・ハードウェア
      </Typography>

      </div>

       <img src="/assets/images/デカテスラ製作機_190403_0036.jpg" alt="テスラコイル" />
      <img src="/assets/images/デカテスラ製作機_190403_0074.jpg" alt="テスラコイル" />
      <br />
      <br />
      <br />
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
        実績
    </Typography>
      <Typography weight={"bold"} variant={"h6"} gutterBottom>
        2019年度
    </Typography>
      <Typography>
        ICPCアジア地区横浜大会出場(1次予選通過)<br />
      </Typography>
      <Typography>
        パワーエレクトロニクス動画コンテスト【優秀賞】<br />
        <div class="youtube_wrapper">
          <iframe title="パワーエレクトロニクス動画コンテスト" class="youtube_iframe" src="https://www.youtube.com/embed/R5hyrU2egJY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Typography>
      <Typography weight={"bold"} variant={"h6"} gutterBottom>
        2018年度
    </Typography>
      <Typography>
        ソフィアサマーハッカソン【最優秀賞】<br />
      </Typography>
    </div>
  )
};

export default withStyles(styles)(Activities)
