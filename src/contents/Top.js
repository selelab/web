import { withStyles } from "@material-ui/core/styles";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
  tdnone: {
    textDecoration: 'none',
  },
  container: {
    margin: '20px 0px 20px 0px',
  },
  indexImage: {
    height:130.
  },
  media: {
    height: 200,
  },
  cardArea: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [breakpoints.up("md")]: {
      flexDirection: 'row',
    }
  },
  card: {
    width: 320,
    margin: 20,
    backgroundColor: '#444',
  },
  arrow: {
    position: 'absolute',
    top: 230,
    right: 10,
    color: '#92D050',
  },
  cardSubText: {
    marginTop: 8,
    padding: '2px 0px 2px 8px',
    borderLeft: '3px solid #92D050',
  },
  indexTwitterImage: {
    width: 300,
  },
});

const Top = ({ classes }) => {
  document.title = '上智大学エレクトロニクスラボ';
  return (
    <div className={classes.root}>
      <Typography variant={"overline"} className={classes.textGreen}>
        INTRODUCING
      </Typography>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        上智大学 エレクトロニクスラボ
      </Typography>
      <img src="/assets/images/図2.jpg" alt="テスラコイル" className={classes.indexImage}/>

      <div className={classes.container}>
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
        「理系」サークルのエレラボ
      </Typography>
      <Typography indent={"small"}>
        我々は2018年5月23日に結成し、現在では上智大学の理工学部や経済学部の学生を中心として、様々な大学の人が集まり、活動をしています。
      </Typography>
      </div>

      <hr/>

      <div className={classes.container}>
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
        活動内容
      </Typography>

      <div className={classes.cardArea}>
      <Card className={classes.card}>
      <a href="/activities/#elecraft" className={classes.tdnone}>
      <CardActionArea>
        
        <CardMedia
          className={classes.media}
          image="/assets/images/デカテスラ製作機_190403_0036.jpg"
          title="電子工作"
        />
        <CardContent style={{ color: "#fff", backgroundColor: "#444" }}>
          <Typography gutterBottom variant="h5" component="h2">
            電子工作
            <ArrowForwardIosIcon className={classes.arrow}/>
          </Typography>
          <Typography variant="body2" component="p" className={classes.cardSubText}>
            テスラコイル、LLCコンバータ
          </Typography>
        </CardContent>
      </CardActionArea>
      </a>
      </Card>

      <Card className={classes.card}>
      <a href="/activities/#programing" className={classes.tdnone}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/images/図3.png"
          title="プログラミング"
        />
        <CardContent style={{ color: "#fff", backgroundColor: "#444" }}>
          <Typography gutterBottom variant="h5" component="h2">
            プログラミング
            <ArrowForwardIosIcon className={classes.arrow}/>
          </Typography>
          <Typography variant="body2" component="p" className={classes.cardSubText}>
            webアプリ、競技プログラミング
          </Typography>
        </CardContent>
      </CardActionArea>
      </a>
      </Card>
      </div>
      </div>

      <hr />

      <div className={classes.container}>
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
        年間イベント
      </Typography>
      <img src="/assets/images/図1.png" alt="テスラコイル"/>
      </div>

      <hr />

      <div className={classes.container}>
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
        公式Twitter
      </Typography>
      <Typography indent={"small"}>
        <a href="https://twitter.com/Sophia_ele_lab?s=20">@Sophia_ele_lab</a>
        <br/>
        <img src="/assets/images/twitter.png" alt="twitter" className={classes.indexTwitterImage}/>
      </Typography>


      </div>


    </div>//root
  )
};

export default withStyles(styles)(Top);
