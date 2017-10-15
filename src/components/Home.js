import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router';
import LoginForm from './LoginForm.js';
import LoginInfo from './LoginInfo.js';
import TeacherSection from './teacherSection.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
      <TeacherSection hereChildren={this.props.children} />
      </div>
    );
  }

  studentSection = () => {
    return (
      <div>
      <center><img src={logo} style={{ width:'100px', height:'86px' }} /></center>
      <StudentSection hereChildren={this.props.children}/>
      </div>
    );

  }

  render() {
    console.log(this.props.LoginReducer.typeOfUser);
    return (
      <div className="Home">
        {this.props.LoginReducer.login ? (this.props.LoginReducer.typeOfUser==1 ? this.teacherSection() : this.studentSection() ): this.infoAtLoginPage()}
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
    LoginReducer:state.LoginReducer
	};


	}

function matchDispatchToProps(dispatch){
	return bindActionCreators({},dispatch);


}

export default connect(mapStateToProps,matchDispatchToProps)(Home);
