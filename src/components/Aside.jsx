import React, { useEffect,useState } from 'react'
import { AppstoreOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {useNavigate, useLocation} from "react-router-dom"

export default function Aside() {
    const navigate=useNavigate()
    const location=useLocation()
    //const [defaultkey,setDefaultkey]=useState('')

    function getItem(label, key, icon, children, type) {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
      }

    const items = [ 
        getItem('view article list', '/listlist', <AppstoreOutlined />, ),
        //getItem('查看文章列表table', 'listtable', <AppstoreOutlined />, ),
        getItem('article editor', '/edit',<EditOutlined />, ),
        getItem('modify means', '/means', <SettingOutlined />, ),
      ];

  //The array is empty, which means no data update detection    
  //  useEffect(()=>{
  //    let path=location.pathname;
  //    //path=/edit
  //    let key=path.split('/')[1];
  //    setDefaultkey(key)
  //  },[])

    const onClick = (e) => {
        //console.log('/', e.key);
        //navigate('/'+e.key)
        navigate(e.key)
        //setDefaultkey(e.key)
      };

  return (
    <div>
        <Menu
            theme='dark'
            onClick={onClick}
            className="aside"
            style={{
                width: 256,
            }}
            //selectedKeys={[defaultkey]}
            defaultSelectedKeys={[location.pathname]}
            mode="inline"
            items={items}
        />

    </div>
  )
}
