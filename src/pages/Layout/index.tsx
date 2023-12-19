import { useState } from 'react'
import { Layout, Menu } from 'antd'
import CustomButton from '../../components/CustomButton'
import './app.styl'

const { Header, Content, Footer } = Layout

export default function TemplateLayout() {
  const [count, setCount] = useState(0)

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <CustomButton size="large" shape="round">
          Sign up
        </CustomButton>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>XXX XXXX ©2023 Created by XXX XXXX</Footer>
    </Layout>
  )
}
