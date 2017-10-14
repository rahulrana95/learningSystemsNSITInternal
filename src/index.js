import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import Home from './components/Home';

import './index.css';
import '../node_modules/antd/dist/antd.css';  // or 'antd/dist/antd.less'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}>


    </Route>
  </Router>
   , document.getElementById('root'));
