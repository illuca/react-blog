import {Col, Menu, Row} from 'antd';
import {CodeOutlined, EditOutlined, HomeOutlined} from '@ant-design/icons';
import "./Header.css"


const Header = () => {
  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeOutlined/>
    },
    {
      label: 'Code',
      key: 'code',
      icon: <CodeOutlined />
    },
    {
      label: ' Life',
      key: 'life',
      icon: <EditOutlined />
    }
  ]

  return (
    <div className="header-container">
      <Row justify="center">
        <Col className="text-holder" xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="username">Yuan's</span>
          <span className="content"> Blog</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" items={items}/>
        </Col>
      </Row>
    </div>
  )
}

export default Header;