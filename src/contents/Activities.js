import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import Slider from "react-slick";
import RemoveIcon from '@material-ui/icons/Remove';

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
    paddingTop: 100,
    margin: '-80px 0px 20px 0px',
    [breakpoints.up("sm")]: {
      paddingTop: 130,
      margin: '-110px 0px 20px 0px',
    },
  },
  slider: {
    marginBottom: 15,
  },

});
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  cssEase: "linear",
  customPaging: function(i) {
    return (
      <RemoveIcon iconStyle={{width: 60}}/>
    );
  },
};
const Activities = ({ classes }) => {
  document.title = '活動内容 | 上智大学エレクトロニクスラボ';
  return (
    <div className={classes.root}>
      <Typography variant={"overline"} className={classes.textGreen}>INTRODUCING</Typography>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        活動内容
      </Typography>

      <hr/>

      <div className={classes.container} id="elecraft">
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
       電子工作・ハードウェア
      </Typography>

      <Slider {...settings} className={classes.slider}>
        <img src="/assets/images/hard_01.jpg" alt=""/>
        <img src="/assets/images/hard_02.jpg" alt=""/>
        <img src="/assets/images/hard_03.jpg" alt=""/>
      </Slider>

      <Typography indent={"small"}>
        電子工作班は回路設計から基盤製作、組み立てまで行います。ハードとソフトを繋ぐ「境界」の分野にも取り組みます。<br/>今までにオペアンプ、Bluetoothアンプ、テスラコイル、VVVFインバータなどを製作しました。
      </Typography>
      </div>

      <hr/>

      <div className={classes.container} id="programing">
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
       プログラミング・ソフトウェア
      </Typography>

      <Slider {...settings} className={classes.slider}>
        <img src="/assets/images/soft_01.jpg" alt="" />
        <img src="/assets/images/soft_02.png" alt="" />
        <img src="/assets/images/soft_03.png" alt="" />
      </Slider>

      <Typography indent={"small"}>
        プログラミング班はPython、JS、などの各種プログラミング言語でホームページやアプリケーションの作成を行っています。<br/>競技プログラミング・AtCoderに参加しているメンバーもいます。
      </Typography>
      </div>

      <hr/>

      <div className={classes.container}>
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
      </Typography>
      <br/>

      <Typography weight={"bold"} variant={"h6"} gutterBottom>
        2018年度
      </Typography>
      <Typography>
        ソフィアサマーハッカソン【最優秀賞】<br />
      </Typography>
      <br/>
      <div class="youtube_wrapper">
        <iframe title="パワーエレクトロニクス動画コンテスト" class="youtube_iframe" src="https://www.youtube.com/embed/R5hyrU2egJY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>

    </div>

  )
};

export default withStyles(styles)(Activities)
