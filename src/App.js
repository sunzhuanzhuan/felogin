import { Form, Input, Button, Checkbox } from 'antd';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const Demo = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = (values) => {
    axios.post('http://172.16.41.4:3306/signin', {
      name: '孙转转',
      pass: '123456'
    }).then(function (response) {
      // handle success
      console.log(response);
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <header className="App-header">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </header >
  );
};


export default Demo;
