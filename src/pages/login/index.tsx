import React from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.less';
import { history } from 'umi';

const HomePage: React.FC = () => {
  async function loginNoCaptcha(params: any) {
    await localStorage.setItem('loginKey', JSON.stringify(params));
    history.push('./home')
  }
  function onFinish(value: any) {
    console.log(value);
    loginNoCaptcha(value);
  }

  return (
    <div className={styles.background}>
      <div className={styles.login}>
        <div className={styles.title}>ALL GONE</div>
        <Form onFinish={onFinish}>
          <Form.Item
            name={'username'}
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="请输入用户名" allowClear />
          </Form.Item>
          <Form.Item
            name={'password'}
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" allowClear />
          </Form.Item>
          <Form.Item>
            <Button
              className={styles.loginButton}
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.link}>
          <a>忘记密码</a>
          <a>没有账号，去注册</a>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
