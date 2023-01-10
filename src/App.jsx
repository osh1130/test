import React from 'react'
import { Button } from 'antd'
import {Outlet,useNavigate} from "react-router-dom";

export default function App() {
  const navigate=useNavigate()
  const onClick = (e) => {
    navigate('/about')
    
  };
  return (
    <div>
       <Outlet />
      <Button type="primary" onClick={onClick} >Primary Button</Button>
    </div>
  )
}
