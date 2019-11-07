/* eslint-disable */
import React from "react";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Top from "./contents/Top";
import Activities from "./contents/Activities"

const ContentEx = ({ classes }) => (
  <Router>
    <Switch>
        <Route path='/' exact component={Top}/>
        <Route path='/activities' exact component={Activities}/>
    </Switch>
  </Router>
);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default ContentEx;
