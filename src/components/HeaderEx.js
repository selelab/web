import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { isWidthUp } from "@material-ui/core/withWidth";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
    color: "#ddd"
  },
  grow: {
    flexGrow: 1
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create("width"),
    width: "100%",
    [breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

const HeaderEx = ({ classes, screen }) => (
  <>
    <Typography noWrap color={"textSecondary"} className={classes.header}>
      上智大学 エレクトロニクスラボ
    </Typography>
    <div className={classes.grow} />
    {screen === "xs" && (
      <IconButton>
        <Icon>more_vert</Icon>
      </IconButton>
    )}
    {screen === "sm" && (
      <>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>more_vert</Icon>
        </IconButton>
      </>
    )}
    {isWidthUp("md", screen) && (
      <>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>phone</Icon>
        </IconButton>
        <IconButton>
          <Icon>camera</Icon>
        </IconButton>
      </>
    )}
  </>
);

HeaderEx.propTypes = {
  screen: PropTypes.string,
  classes: PropTypes.shape({}).isRequired
};
HeaderEx.defaultProps = {
  screen: null
};

export default withStyles(styles)(HeaderEx);
