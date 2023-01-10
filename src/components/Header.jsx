import React, { useEffect, useState } from 'react'
import { Dropdown, Menu, Space,message } from 'antd'
import { CaretDownOutlined  } from '@ant-design/icons'
import logoImg from "../assets/logo1.jpg"
import defaultAvatar from '../assets/defaultavatar.jpg'
import { useNavigate } from 'react-router'

export default function Header() {
    const[avatar,setAvatar] = useState(defaultAvatar)
    const[username,setUsernamer] = useState("vivi")
    const navigate=useNavigate()

    //模拟参数加载的生命周期 componentDidMount
    useEffect(()=>{
        let username1=localStorage.getItem('username')
        let avatar1=localStorage.getItem('avatar')
        if(username1){
            setUsernamer(username1)
        }
        if(avatar1){
            setAvatar('http://47.93.114.103:6688/'+avatar1)
        }
        
    },[])

    //退出登录
    const logout=() =>{
        localStorage.clear()
        //console.log(localStorage.getItem("cms-token"));
        message.success("logging out")
        setTimeout(()=>navigate('/login'),1500)
    }

    //修改资料
    const changemeans=() =>{
        setTimeout(()=>navigate('/means'),1500)
    }

    //下拉表单
    const menu = (
    <Menu
        items={[
        {
            key: '1',
            label: (
            <a target="_blank" onClick={changemeans}>
                修改资料
            </a>
            ),
        },
        {
            key: '2',
            label: (
            <a target="_blank"  onClick={logout}>
                退出登录
            </a>
            ),
        },
        ]}
  />
  );


  return (
    <header>
        <img src={logoImg} alt="" className="logo" />
        <div className="right">
            <Dropdown overlay={menu}>
                <a className='dropdown' onClick={e => e.preventDefault()}>
                <img src={avatar} className="avatar"  alt="" />
                <Space>
                    <span>{username}</span>
                    <CaretDownOutlined />
                </Space>
                </a>
            </Dropdown>
        </div>
      </header>
  )
}
