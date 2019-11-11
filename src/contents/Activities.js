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

const Activities = ({ classes }) => {
  document.title = '活動内容 | 上智大学エレクトロニクスラボ';
  return (
    <div className={classes.root}>
      <Typography variant={"overline"}>INTRODUCING</Typography>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        活動内容
    </Typography>
      <Typography indent={"small"}>
        当サークルには大きく分けて3つの班があります。<br />
        1つ目はハード班です。ハード班では、機能創造理工学科の学生や、情報理工学科の学生が電気回路やテスラコイル、アンプの制作に取り組んでいます。<br />
        次にソフト班です。ソフト班では、主に競技プログラミングの活動をしています。毎週木曜日の5・6限の時間に活動を行っています。また、Webページの管理や、制作も行っています。<br />
        <br />
      </Typography>
      <img src="/assets/images/デカテスラ製作機_190403_0036.jpg" alt="テスラコイル" />
      <img src="/assets/images/デカテスラ製作機_190403_0074.jpg" alt="テスラコイル" />
      <br />
      <br />
      <br />
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
        実績
    </Typography>
      <Typography weight={"bold"} variant={"h6"} gutterBottom>
        2018年度
    </Typography>
      <Typography>
        パワーエレクトロニクス動画コンテスト【優秀賞】<br />
        <div class="youtube_wrapper">
          <iframe title="パワーエレクトロニクス動画コンテスト" class="youtube_iframe" src="https://www.youtube.com/embed/R5hyrU2egJY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Typography>
      <Typography weight={"bold"} variant={"h6"} gutterBottom>
        2019年度
    </Typography>
      <Typography>
        ソフィアサマーハッカソン【最優秀賞】<br />
      </Typography>
    </div>
  )
};

export default withStyles(styles)(Activities)