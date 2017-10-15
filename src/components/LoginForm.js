import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import '../index.css';
import store from '../Stores/index.js';
const FormItem = Form.Item;

// type 1 teacher
// type 2 student


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('http://192.168.5.1:5000/login', {
        username:values.userName,
        password:values.password
      })
      .then(function (response) {
        console.log(response);
        store.dispatch({
          payload:response.data[1].data[0],
          login:1,
          type:'loginData',
          typeOfUser:response.data[0].type
        })
      });


    }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="loginFormDiv">
      <Form onSubmit={this.handleSubmit} style={{ width:'95%', marginLeft:'auto', marginRight:'auto' }} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a><br/>
          <center><Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button></center><br/>


        </FormItem>
      </Form>
      </div>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;
