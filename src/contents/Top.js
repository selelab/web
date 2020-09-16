import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(({breakpoints}) => ({
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
  eventTr: {
    height: 50,
    paddingLeft: 10,
  },
  eventMonth: {
    color: '#92D050',
    width: 60,
    textAlign: 'center',
  },
  eventContent: {
    paddingLeft: 20,
  },
  indexTwitterImage: {
    width: 300,
  },
}));

const events = [
  {
    month: "4月",
    content: "フレッシュマンウィーク",
  },
  {
    month: "8月",
    content: "オープンキャンパス",
  },
  {
    month: "",
    content: "Maker Faire Tokyo 見学",
  },
  {
    month: "9月",
    content: "JAXAつくば宇宙センター 見学",
  },
  {
    month: "10月",
    content: "ソフィア祭",
  },
  {
    month: "11月",
    content: "部内ハッカソン（ハードウェア）",
  },
  {
    month: "12月",
    content: "忘年会",
  },
  {
    month: "2月",
    content: "部内ハッカソン（ソフトウェア）- 冬合宿",
  },
  {
    month: "4月",
    content: "部内ハッカソン（ソフトウェア）- オンライン",
  },
];

const Top = () => {
  const classes = useStyles();
  const eventList = events.map(function(item){
    return (
      <tr className={classes.eventTr}>
        <td className={classes.eventMonth}><Typography weight={"bold"} variant={"h5"}>{item.month}</Typography></td>
        <td className={classes.eventContent}><Typography weight={"bold"} variant={"h6"}>{item.content}</Typography></td>
      </tr>
    )
  });

  document.title = '上智大学エレクトロニクスラボ';
  return (
    <div className={classes.root}>
      <Typography variant={"overline"} className={classes.textGreen}>
        INTRODUCING
      </Typography>
      <Typography weight={"bold"} variant={"h4"} gutterBottom>
        上智大学 エレクトロニクスラボ
      </Typography>
      <img src="/assets/images/index_01.jpg" alt="" className={classes.indexImage}/>

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
          image="/assets/images/hard_00.jpg"
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
          image="/assets/images/soft_00.jpg"
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
        年間イベント（2019年実績）
      </Typography>
      <table>
        {eventList}
      </table>
      </div>

      <hr />

      <div className={classes.container}>
      <Typography weight={"bold"} variant={"h5"} gutterBottom>
        公式Twitter
      </Typography>
      <Typography indent={"small"}>
        <a href="https://twitter.com/Sophia_ele_lab?s=20" target="blank">@Sophia_ele_lab</a>
        <br/>
        <img src="/assets/images/twitter.png" alt="twitter" className={classes.indexTwitterImage}/>
      </Typography>


      </div>


    </div>//root
  )
};

export default Top;
