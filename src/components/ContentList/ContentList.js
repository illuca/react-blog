import React, {useState} from 'react'
import {List} from 'antd'
import {CalendarOutlined, FireOutlined, FolderOutlined} from '@ant-design/icons';


const ContentList = () => {
  const [mylist] = useState(
    [
      {
        title: 'web compression',
        context: 'The big companies make efforts to develop green energy not because they love the earth. But the electricity is expensive. For labor cost, you can fire them but for electricity, you have to mantain the equipment every month. The clients’ data is stored in those equipments.'
      },
      {
        title: 'programming language',
        context: 'The big companies make efforts to develop green energy not because they love the earth. But the electricity is expensive. For labor cost, you can fire them but for electricity, you have to mantain the equipment every month. The clients’ data is stored in those equipments.'
      },
      {
        title: 'recommender system',
        context: 'The big companies make efforts to develop green energy not because they love the earth. But the electricity is expensive. For labor cost, you can fire them but for electricity, you have to mantain the equipment every month. The clients’ data is stored in those equipments.'
      }
    ]
  )

  return (
    <div>
      <List
        header={<div>log</div>}
        itemLayout="vertical"
        dataSource={mylist}
        renderItem={item => (
          <List.Item>
            <div className="list-title">{item.title}</div>
            <div className="list-icon">
              <span> <CalendarOutlined/>2023</span>
              <span><FolderOutlined/>video</span>
              <span><FireOutlined/>99</span>
            </div>
            <div className="list-context">{item.context}</div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ContentList;