import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const year = new Date().getFullYear();

const FooterEx = () => (
  <div style={{ maxWidth: 700, margin: "auto", textAlign: "center", color:"#fff",}}>
    <Typography variant="caption" align={"center"}>
      © Copyright {year}
    </Typography>
    <Divider style={{ margin: "24px auto", width: 60 }} />
  </div>
);

FooterEx.propTypes = {};
FooterEx.defaultProps = {};

export default FooterEx;
