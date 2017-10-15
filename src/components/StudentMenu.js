import React from  'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class StudentMenu extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
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
          <Link to="scourses" > <Icon type="book" />Courses </Link>
        </Menu.Item>
        <Menu.Item key="discussions">
          <Link to="/sdiscussions" ><Icon type="usergroup-add" />Discussions</Link>
        </Menu.Item>
        <Menu.Item key="polls">
          <Link to="/student/polls" ><Icon type="bar-chart" />Polls</Link>
        </Menu.Item>
        <Menu.Item key="resources">
          <Link to="/student/resources" ><Icon type="paper-clip" />Resources</Link>
        </Menu.Item>
        <Menu.Item key="announcements">
          <Link to="/sannouncements" ><Icon type="notification" />Announcements</Link>
        </Menu.Item>
        <Menu.Item key="deadline">
          <Link to="/student/deadlines" ><Icon type="clock-circle-o" />Deadlines</Link>
        </Menu.Item>


      </Menu>
    );
  }
}
