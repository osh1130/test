import React, { useEffect } from 'react'
import { Breadcrumb } from 'antd'
import { useState } from 'react'
import {useLocation} from 'react-router-dom'

export default function Bread() {
  const [breadname,setBreadname]=useState('')
  const{pathname} =useLocation()

  useEffect(()=>{
    switch(pathname){
        //case "/listtable":
        //    setBreadname("查看文章列表table");
        //    break;
        case "/listlist":
              setBreadname("view article list");
              break;
        case "/edit":
            setBreadname("article editor");
            break;
        case "/means":
            setBreadname("modify means");
            break;
        default:
            //从编辑按钮进入编辑面包屑也要修改
            setBreadname(pathname.includes('edit') ? '文章编辑' : "");
            break;
    }
  },[pathname])
  return (
    <div>
        <Breadcrumb style={{height:'30px'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">{breadname}</a></Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}
