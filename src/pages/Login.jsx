import React from 'react'
import "./less/login.less"
import { Button, Form, Input  } from 'antd'
import logoImg from "../assets/logo1.jpg"
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import {Link,useNavigate} from "react-router-dom"
//import { LoginApi } from '../request/api'
import mockuserData from "../mock/mockuserData"


export default function Login() {
  const navigate = useNavigate()
  const onFinish = (values) => {
    //console.log('Success:', values);
    // LoginApi({
    //     username: values.username,
    //     password: values.password
    //   }).then(res=>{
    //     //console.log(res)
    //     if(res.errCode===0){
    //       message.success(res.message);
    //       //Store data, not as a string because it is easy to store in this way
    //       localStorage.setItem("avatar",res.data.avatar)
    //       localStorage.setItem("cms-token",res.data['cms-token'])
    //       localStorage.setItem("editable",res.data.editable)
    //       localStorage.setItem("player",res.data.player)
    //       localStorage.setItem("username",res.data.username)
    //       //console.log(localStorage.getItem("cms-token"));
    //       //并跳转到根路径
    //       setTimeout(()=>navigate('/listlist'),1500)
    //     } else{
    //       message.error(res.message);
    //     }
    //   }) 
    const res = mockuserData;
    //console.log(res.mockuserData.name)
    localStorage.setItem("name",res.mockuserData.name)
    localStorage.setItem("token",res.mockuserData.token)
    navigate('/listlist')
  };
  
  
  return (
    <div className='login'>
      <div className='loginbox'>
            <img src={logoImg} alt="" /> 
            <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder='please input your username'/>
            </Form.Item>

            <Form.Item
              
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password size="large" prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Please input your password'/>
            </Form.Item>

            <Form.Item>
              <Link to="/register">No account?Register now</Link>
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" block>
                log in
              </Button>
            </Form.Item>
          </Form>
      </div>
    </div>
  )
}
