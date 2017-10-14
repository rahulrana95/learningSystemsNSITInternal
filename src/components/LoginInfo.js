import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router';
import LoginForm from './LoginForm.js';
import logo from '../images/logoPro.png';
const { Header, Content, Footer, Sider } = Layout;

class LoginInfo extends Component {
  render() {
    return (
      <div className="LoginInfo">
      <div>
      <h2>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus diam gravida nisl facilisis vehicula. In malesuada quis urna eget sagittis. Proin a cursus justo. Aliquam porttitor velit erat, a eleifend eros consequat ut. Proin vehicula turpis et sapien hendrerit, eu rhoncus lorem dignissim. Vestibulum non turpis malesuada, mattis libero in, sollicitudin nisl. Proin lacus lacus, bibendum euismod arcu a, molestie auctor ipsum. Nulla lobortis non mi ac ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum fringilla finibus purus nec pretium. Vivamus eget accumsan lectus, blandit tristique ex. Aenean pulvinar erat in fringilla fringilla. Vivamus malesuada lacus massa, ac luctus felis sollicitudin non.
      </p>
      <img src={logo} style={{ width:'100px', height:'100px' }} />
      </div>
      </div>
    );
  }
}

export default LoginInfo;
