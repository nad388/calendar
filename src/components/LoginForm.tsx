import { Button, Form, Input } from 'antd';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/actionCreators';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    dispatch(AuthActionCreators.login(username, password));
  };
  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item
        label='Username'
        name='username'
        rules={[rules.required('Please input your username!')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[rules.required('Please input your password!')]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={'password'}
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
