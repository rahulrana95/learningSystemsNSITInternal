import React, { Component } from 'react';
import { Card, Col, Row, Layout, Icon } from 'antd';
import StudentMenu from './StudentMenu.js';
const { Header, Footer, Sider, Content } = Layout;
class StudentSection extends Component {
  render() {
    return (
      <div id="TeacherSection">
  <Layout>
      <Sider style={{ backgroundColor:'white', color:'black' }}>
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
        <Header style={{ marginLeft:'10px' ,backgroundColor:'white' }} > <StudentMenu />  </Header>
        <Content style={{ marginLeft:'10px', padding:'10px', marginBottom:'20px',marginTop:'20px' }}>

        </Content>

      </Layout>
    </Layout>
      </div>
    );
  }
}

export default StudentSection;
