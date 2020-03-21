/* eslint-disable */
import React from "react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Top from "./contents/Top";
import Activities from "./contents/Activities"
import Events from "./contents/Events"
import NotFound from "./contents/404"

const ContentEx = ({ classes }) => (
  <Router>
    <Switch>
      <Route path='/' exact component={Top} />
      <Route path='/activities' exact component={Activities} />
      <Route path='/events' exact component={Events} />
      <Route path='*' component={NotFound} statusCode={404} />
    </Switch>
  </Router>
);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default ContentEx;
