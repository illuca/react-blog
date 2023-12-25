import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import 'pages/AdminIndex/AdminIndex.css'

import {
  FileAddOutlined,
  FileImageOutlined,
  PieChartOutlined,
  UserOutlined
} from '@ant-design/icons';
import {Outlet} from 'react-router-dom';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;


export default function AdminIndex() {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined/>
            <span>Workbench</span>
          </Menu.Item>
          <Menu.Item key="2">
            <FileAddOutlined/>
            <span>Add Articles</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined/>
                  <span>Articles Management</span>
                </span>
            }
          >
            <Menu.Item key="3">Add Article</Menu.Item>
            <Menu.Item key="4">Article List</Menu.Item>

          </SubMenu>

          <Menu.Item key="9">
            <FileImageOutlined/>
            <span>Comments Management</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Admin Management</Breadcrumb.Item>
            <Breadcrumb.Item>Workbench</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{padding: 24, background: '#fff', minHeight: 360}}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Yuan's Blog</Footer>
      </Layout>
    </Layout>
  )
}