import React from 'react'
import "./less/login.less"
import { Button, Checkbox, Form, Input,message } from 'antd'
import logoImg from "../assets/logo1.jpg"
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import {Link, useNavigate} from "react-router-dom"
import { RegisterApi } from '../request/api'

export default function Register() {
  const navigate = useNavigate()
  const onFinish = (values) => {
    //console.log('Success:', values);
    RegisterApi({
      username: values.username,
      password: values.password
    }).then(res=>{
      //console.log(res)
      if(res.errCode===0){
        message.success(res.message);
        //跳到登录page
        setTimeout(()=>navigate('/login'),1500)
      } else{
        message.error(res.message);
      }
    }) //跨域
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

            <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password size="large" prefix={<LockOutlined className="site-form-item-icon" />}  placeholder='Please confirm your password'/>
        </Form.Item>

            <Form.Item>
              <Link to="/login">Have an account?login now</Link>
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" block>
                Regist now
              </Button>
            </Form.Item>
          </Form>
      </div>
    </div>
  )
}
