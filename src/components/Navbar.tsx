import { Layout, Menu, MenuProps, Row } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../routes';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const auth = false;
  return (
    <Layout.Header>
      <Row justify={'end'}>
        {auth ? (
          <>
            <div style={{ color: 'white' }}>nad388</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item onClick={() => console.log('logout')} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>
              login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
