import {Button, Card, Input, message, Spin} from 'antd';
import React, {useState} from 'react';
import {KeyOutlined, UserOutlined} from '@ant-design/icons';
import {checkLogin} from 'services/services';
import {useNavigate} from 'react-router-dom';
import "pages/Login/Login.css"


export default function Login() {
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()

  function checkUser() {
    setIsLoading(true)
    if(!username){
      message.error('Username is empty.')
      return false
    }else if(!password){
      message.error('Password is empty.')
      return false
    }
    checkLogin(username,password).then(
      res=>{
        setIsLoading(false)
        if(res.data.data=='ok'){
          localStorage.setItem('openId',res.data.openId)
          navigate('/index')
        }else{
          message.error('Username or password is wrong.')
        }
      }
    )

    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  }

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="Yuan 's Blog System" bordered={true} style={{ width: 400 }} >
          <Input
            id="userName"
            size="large"
            placeholder="Enter your username"
            onChange={(e)=>{setUsername(e.target.value)}}
            prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}}/>}

          />
          <br/><br/>
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            onChange={(e)=>{setPassword(e.target.value)}}
            prefix={<KeyOutlined style={{color:'rgba(0,0,0,.25)'}}/>}
          />
          <br/><br/>
          <Button type="primary" size="large" block onClick={checkUser} > Sign in </Button>
        </Card>
      </Spin>
    </div>
  )
}