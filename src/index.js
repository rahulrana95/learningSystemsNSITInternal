import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import StudentCourses from './components/StudentCourses.js';
import StudentSection from './components/studentSection.js';
import TeacherSection from './components/teacherSection.js';
import {Provider} from 'react-redux';

import LoginForm from './components/LoginForm.js';
import LoginInfo from './components/LoginInfo.js';
import StudentDiscussions from './components/StudentDiscussions.js';
import StudentAnnouncements from './components/StudentAnnouncements.js';
import store from './Stores/index.js';
import './index.css';
import '../node_modules/antd/dist/antd.css';  // or 'antd/dist/antd.less'

const data = (
  <div>
    <LoginForm/>

  </div>
);

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Home}>

        <Route path="scourses" component={StudentCourses}></Route>
        <Route path="sdiscussions" component={StudentDiscussions}></Route>
        <Route path="spolls" component={StudentCourses}></Route>
        <Route path="sresources" component={StudentCourses}></Route>
        <Route path="sannouncements" component={StudentAnnouncements}></Route>
        <Route path="sdeadlines" component={StudentCourses}></Route>
        <Route path="tcourses" component={StudentCourses}></Route>
        <Route path="tdiscussions" component={StudentCourses}></Route>
        <Route path="tpolls" component={StudentCourses}></Route>
        <Route path="tresources" component={StudentCourses}></Route>
        <Route path="tannouncements" component={StudentCourses}></Route>
        <Route path="tdeadlines" component={StudentCourses}></Route>
    </Route>
  </Router>
  </Provider>
   , document.getElementById('root'));
