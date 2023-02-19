import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.less';
import { history, useModel, useLocation } from 'umi';
import { loginNoCaptcha } from '@/api/baseSystem/login';

const HomePage: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false)

  async function toLoginNoCaptcha(params: any) {
    try {
      const res = await loginNoCaptcha(params);
      if (res.code === Request_Success_code) {
        const userInfo = res.data
        await setInitialState((s: any) => ({
          ...s,
          currentUser: userInfo,
        }));
        localStorage.setItem('loginKey', JSON.stringify(params));
        history.push('./');
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  function onFinish(value: any) {
    setLoading(true)
    console.log(value);
    toLoginNoCaptcha(value);
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
            <Input
              prefix={<UserOutlined />}
              placeholder="请输入用户名"
              allowClear
            />
          </Form.Item>
          <Form.Item
            name={'password'}
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="请输入密码"
              allowClear
            />
          </Form.Item>
          <Form.Item>
            <Button
              className={styles.loginButton}
              type="primary"
              htmlType="submit"
              loading={loading}
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
