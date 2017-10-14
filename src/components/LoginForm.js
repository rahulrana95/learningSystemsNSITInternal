import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '../index.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
            Log in as Teacher
          </Button></center><br/>
          <center><Button type="primary" htmlType="submit" className="login-form-button">
            Log in as Student
          </Button></center>

        </FormItem>
      </Form>
      </div>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;
