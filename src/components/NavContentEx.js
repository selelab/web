import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

const list = [
  {
    primaryText: "TOP",
    icon: "home",
    url: "/",
    external: false
  },
  {
    primaryText: "活動内容",
    icon: "people",
    url: "/activities",
    external: false
  },
  {
    primaryText: "イベント",
    icon: "event",
    url: "/events",
    external: false
  },
  {
    primaryText: "ブログ",
    icon: "library_books",
    url: "https://selelab.hatenablog.com/",
    external: true
  },
  {
    primaryText: "ログイン",
    icon: "lock",
    url: "/kusatsu/admin",
    external: false
  }
];

function ListItemTextWithOpenInNewIcon(text) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      height: '20px'
    }}>
      <p>{text}</p>
      &ensp; &ensp;
      <Icon style={{ fontSize: '18px' }}>open_in_new</Icon>
    </div>
  );
};

const NavContentEx = () => (
  <List>
    {list.map(({ primaryText, icon, url, external }, i) => (
      <ListItem
        key={primaryText}
        selected={url === window.location.pathname}
        button
        component="a" href={url}
        target={external && ("_blank")}
      >
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        {external && (
          <ListItemText
            primary={ListItemTextWithOpenInNewIcon(primaryText)}
            primaryTypographyProps={{ noWrap: true }}
          />
        )}
        {!external && (
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
        )}
      </ListItem>
    ))}
    <Divider style={{ margin: "12px 0" }} />
    <ListItem
      button
      component="a" href={"mailto:sophiaelelab@gmail.com"}
    >
      <ListItemIcon>
        <Icon>mail</Icon>
      </ListItemIcon>
      <ListItemText
        primary={ListItemTextWithOpenInNewIcon("お問い合わせ")}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>
);

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
