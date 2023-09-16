import {Avatar,Divider} from 'antd'
import './Author.css'
import {GithubOutlined, LinkedinOutlined} from '@ant-design/icons';

const Author =()=>{

  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="https://p.ipic.vip/exl53n.jpg"  />
      </div>
      <div className="author-introduction">
        A Core Seeker, a young question machine, whose name is Yuan.
        <Divider/>
        <div className="links">
          <GithubOutlined />
          <LinkedinOutlined />
        </div>
      </div>
    </div>
  )
}

export default Author