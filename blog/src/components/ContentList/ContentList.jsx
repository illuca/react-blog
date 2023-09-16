import React from 'react'
import {Breadcrumb, List} from 'antd'
import {CalendarOutlined, FireOutlined, FolderOutlined} from '@ant-design/icons';
import './ContentList.css'
import {formatDate} from '../../utils/utils';
import {Link} from 'react-router-dom';


const ContentList = ({list}) => {
  return (
    <div>
      <div className="bread-div">
        <Breadcrumb>
          <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
          <Breadcrumb.Item>Articles</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <List
        header={<div>Log</div>}
        itemLayout="vertical"
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Link to={`/detail/${item.id}`}>
              <div className="list-title">{item.title}</div>
            </Link>
            <div className="list-icon">
              <span> <CalendarOutlined/>{formatDate(item.create_time)}</span>
              <span><FolderOutlined/>{item.type_name}</span>
              <span><FireOutlined/>{item.view_count}</span>
            </div>
            <div className="list-context">{item.introduction}</div>
          </List.Item>
        )}
      />
    </div>
  )
}


export default ContentList;