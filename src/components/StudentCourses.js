import React, { Component } from 'react';
import {Card ,Col}  from 'antd';

class StudentCourses extends Component {

  showCourses = () => {




  }
  render() {
    console.log('Student ');
    return (
      <div className="StudentCourses">
      <Col span={6} style={{ margin:'5px' }} >  <Card title="Card title" extra={<a href="#">More</a>} >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card></Col>
  <Col span={6} style={{ margin:'5px' }}>  <Card title="Card title" extra={<a href="#">More</a>} >
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
</Card></Col>
<Col span={6} style={{ margin:'5px' }}>  <Card title="Card title" extra={<a href="#">More</a>} >
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
</Card></Col>

      </div>
    );
  }
}

export default StudentCourses;
