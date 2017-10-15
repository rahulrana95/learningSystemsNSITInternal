import React, { Component } from 'react';

import {Menu,message, Dropdown, Input} from 'antd';



class StudentAnnouncements extends Component {
  constructor (){
    super();
    this.state = {
      semester:'Select',
      branch: 'Select',
      message: 'nothing'
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);

  }

  getMessage = (e) => {
    this.setState({
      "message":e.target.value
    })
  }
  handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  handleMenuClick = (e) =>  {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  render() {

    const menu = (
      <Menu onClick={handleMenuClick.bind(this)}>
        <Menu.Item key="coe">COE</Menu.Item>
        <Menu.Item key="ece">ECE</Menu.Item>
        <Menu.Item key="it">IT</Menu.Item>
        <Menu.Item key="ice">ICE</Menu.Item>
        <Menu.Item key="mpae">MPAE</Menu.Item>
        <Menu.Item key="me">ME</Menu.Item>
        <Menu.Item key="bt">BT</Menu.Item>
      </Menu>
    );
    const menuSemester = (
      <Menu onClick={handleMenuClickSemester.bind(this)}>
        <Menu.Item key="1">1</Menu.Item>
        <Menu.Item key="2">2</Menu.Item>
        <Menu.Item key="3">3</Menu.Item>
        <Menu.Item key="4">4</Menu.Item>
        <Menu.Item key="5">5</Menu.Item>
        <Menu.Item key="6">6</Menu.Item>
        <Menu.Item key="7">7</Menu.Item>
        <Menu.Item key="8">8</Menu.Item>
      </Menu>
    );


function handleMenuClick(e) {
  this.setState({
    branch: e.item.props.children
  });
}
  function handleMenuClickSemester(e) {
    this.setState({
      semester: e.item.props.children
    });
}
    return (
      <div className="StudentAnnouncements">

      <center><Dropdown.Button style={{ marginRight:'10px' }} overlay={menu}>
      {this.state.branch}
    </Dropdown.Button>
    <Dropdown.Button  overlay={menuSemester}>
    {this.state.semester}
  </Dropdown.Button></center>
  <center>(<Input placeholder="Enter Message" onChange={this.getMessage} /></center>
      </div>
    );
  }
}

export default StudentAnnouncements;
