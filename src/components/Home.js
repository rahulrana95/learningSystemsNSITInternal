import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router';
import LoginForm from './LoginForm.js';
import LoginInfo from './LoginInfo.js';
import TeacherSection from './teacherSection.js';
import StudentSection from './studentSection.js';
import logo from '../images/logoPro.png';

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {

  infoAtLoginPage = () => {
    return (
      <div>
      <center><img src={logo} style={{ width:'300px', height:'257px' }} /></center>
      <LoginForm />
      <LoginInfo/>
      </div>
    );
  }

  teacherSection = () => {
    return (
      <div>
      <center><img src={logo} style={{ width:'100px', height:'86px' }} /></center>
      <TeacherSection/>
      </div>
    );
  }

  studentSection = () => {
    return (
      <div>
      <center><img src={logo} style={{ width:'100px', height:'86px' }} /></center>
      <StudentSection />
      </div>
    );

  }

  render() {
    return (
      <div className="Home">
        {this.studentSection()}
      </div>
    );
  }
}

export default Home;
