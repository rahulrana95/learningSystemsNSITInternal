import React from  'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router';
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
          <Link to="tcourses"><Icon type="book" />Courses</Link>
        </Menu.Item>
        <Menu.Item key="discussions">
          <Link to="discussions"><Icon type="usergroup-add" />Discussions</Link>
        </Menu.Item>
        <Menu.Item key="polls">
          <Link to="tpolls"><Icon type="bar-chart" />Polls</Link>
        </Menu.Item>
        <Menu.Item key="resources">
        <Link to="tdiscussions">  <Icon type="paper-clip" />Resources</Link>
        </Menu.Item>
        <Menu.Item key="announcements">
        <Link to="tannouncements">  <Icon type="notification" />Announcements</Link>
        </Menu.Item>


      </Menu>
    );
  }
}
