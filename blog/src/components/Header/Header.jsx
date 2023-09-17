import {Col, Menu, Row} from 'antd';
import {CodeOutlined, EditOutlined, HomeOutlined} from '@ant-design/icons';
import './Header.css'
import {useEffect, useState} from 'react';
import React from 'react';
import {getTypes} from '../../services/services';
import {useNavigate} from 'react-router-dom';



const Header = () => {
  const [types, setTypes] = useState([]);
  const navigate = useNavigate()



  const fetchData = async () => {
    let result = await getTypes();
    let tmp = result.data.map((type) => {
      let icon;
      if (type.type_name === 'Home') {
        icon = <HomeOutlined/>;
      } else if (type.type_name === 'Reflection') {
        icon = null;
      } else if (type.type_name === 'Code') {
        icon = <CodeOutlined/>;
      } else {
        icon = <EditOutlined/>;
      }
      return {label: type.type_name, key: type.id, icon};
    });
    setTypes(tmp);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = function({ item, key, keyPath, domEvent }) {
    navigate(`/articles?typeId=${key}`);
  }

  return (
    <div className="header-container">
      <Row justify="center">
        <Col className="text-holder" xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="username">Yuan's</span>
          <span className="content"> Blog</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick} items={types}/>
        </Col>
      </Row>
    </div>
  )
}

export default Header;