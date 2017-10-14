import React from  'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class TeacherMenu extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="courses">
          <Icon type="book" />Courses
        </Menu.Item>
        <Menu.Item key="discussions">
          <Icon type="usergroup-add" />Discussions
        </Menu.Item>
        <Menu.Item key="polls">
          <Icon type="bar-chart" />Polls
        </Menu.Item>
        <Menu.Item key="resources">
          <Icon type="paper-clip" />Resources
        </Menu.Item>
        <Menu.Item key="announcements">
          <Icon type="notification" />Announcements
        </Menu.Item>


      </Menu>
    );
  }
}
