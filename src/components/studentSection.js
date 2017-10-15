import React, { Component } from 'react';
import { Card, Col, Row, Layout, Icon } from 'antd';
import StudentMenu from './StudentMenu.js';
import StudentCourses from './StudentCourses.js';
import logo from '../images/logoPro.png';

const { Header, Footer, Sider, Content } = Layout;
class StudentSection extends Component {
  render() {
    console.log(this.props.hereChildren);
    return (
      <div>
      <div id="StudentSection">

  <Layout>
      <Sider style={{ backgroundColor:'white', color:'black', borderRadius:'10px' }}>
        <div className="ProfilePic">
          <img src="https://avatars1.githubusercontent.com/u/10388123?v=4&s=460" style={{ borderRadius:'100px', width:'90%', height:'auto' }} />
        </div>

        <div className="ProfileName">
        <h1><strong>Oliver Jaocb</strong></h1>
        <h3 style={{ fontStyle:'italic'}}><q>Build a future where people live in harmony with nature.</q></h3>
        <br/>
        </div>

        <div className="ProfileDetail">
          <Icon type="book" /><span>Computers</span><br/>
          <Icon type="mail" /><span>3rahul4@gmal.com</span><br/>
          <Icon type="calendar" /><span>10/08/1995</span><br/>


        </div>


      </Sider>
      <Layout>
        <Header style={{ marginLeft:'10px' ,backgroundColor:'white', borderRadius:'10px' }} > <StudentMenu />  </Header>
        <Content style={{ borderRadius:'10px', marginLeft:'10px', padding:'10px', marginBottom:'20px',marginTop:'20px' }}>
          {this.props.hereChildren}
        </Content>

      </Layout>
    </Layout>
      </div>
      </div>
    );
  }
}

export default StudentSection;
