import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  createMuiTheme,
  MuiThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
  sidebarStyles,
  headerStyles,
  defaultLayoutPreset,
  standardLayoutPreset,
  fixedLayoutPreset,
  contentBasedLayoutPreset,
  cozyLayoutPreset,
  muiTreasuryPreset
} from "@mui-treasury/layout";
import HeaderOffset from "@mui-treasury/layout/components/HeaderOffset";

import NavContentEx from "./components/NavContentEx";
import HeaderEx from "./components/HeaderEx";
import ContentEx from "./ContentEx";
import FooterEx from "./components/FooterEx";

import "./styles.css";

const presets = {
  createDefaultLayout: defaultLayoutPreset,
  createStandardLayout: standardLayoutPreset,
  createFixedLayout: fixedLayoutPreset,
  createContentBasedLayout: contentBasedLayoutPreset,
  createCozyLayout: cozyLayoutPreset,
  createMuiTreasuryLayout: muiTreasuryPreset
};

const useSidebarStyles = makeStyles(sidebarStyles);
const useHeaderStyles = makeStyles(headerStyles);
const useStyles = makeStyles({
  paper: {
    background: '#333',
    borderRight: '1px solid #fff'
  },
});

// add presets.create{}() to config props in Root to change the behavior, looking and layout
// <Root config={presets.createCozyLayout()}> ...
function App() {
  const [loading, ] = useState(false);
  const [preset, ] = useState("createStandardLayout");
  const [data, ] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });
  const sidebarStyles = useSidebarStyles();
  const headerStyles = useHeaderStyles();
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={createMuiTheme()}>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography variant={"h2"}>Changing Preset...</Typography>
        </div>
      ) : (
          <Root config={presets[preset]}>
            <CssBaseline />
            <Header style={{ background: "#333" }}>
              <Toolbar>
                <CollapseBtn
                  component={IconButton}
                  className={headerStyles.leftTrigger}
                  style={{ color: "#92D050" }}
                >
                  <CollapseIcon />
                </CollapseBtn>
                <SidebarTrigger
                  className={headerStyles.leftTrigger}
                  style={{ color: "#92D050" }}
                >
                  <SidebarTriggerIcon />
                </SidebarTrigger>
                {data.header && <HeaderEx />}
              </Toolbar>
            </Header>
            <HeaderOffset />
            <Content>
              {data.content && <ContentEx />}
            </Content>
            <Sidebar classes={{ paper: classes.paper }}>
              {({ collapsed }) => (
                <div className={sidebarStyles.container}>
                  {data.nav && <NavContentEx />}
                </div>
              )}
            </Sidebar>
            <Footer>{data.footer && <FooterEx />}</Footer>
          </Root>
        )}
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
