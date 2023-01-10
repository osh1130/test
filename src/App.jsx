import React from 'react'
import {Outlet} from 'react-router-dom'
import {connect} from 'react-redux'
import { useLocation,useNavigate} from "react-router-dom"
import { useEffect } from 'react'
import { Layout,message } from "antd"
import Header from './components/Header' 
import Aside from './components/Aside'
import Bread from './components/Bread'

// // Component to go to the login page
// function ToLogin(){
//   const navigateTo = useNavigate()
//   useEffect(()=>{
//     navigateTo("/login");
//     message.warning("You have not logged in, please log in and then visit！");
//   },[])
//   }
  
//   // Component to go to the home page
//   function ToPage1(){
//     const navigateTo = useNavigate()
//     useEffect(()=>{
//       navigateTo("/listlist");
//       message.warning("you are already logged in！");
//     },[])
//   }

//   // encapsulation route guard
//   function BeforeRouterEnter(){
//     //const outlet = useRoutes(router);
//     /*
//     1. If you visit the login page and have a token, jump to the home page
//     2. If the access is not the login page and there is no token, jump to the login page
//     3. The rest can be released normally
//     */
//     const location = useLocation()
//     let token = localStorage.getItem("cms-token");
//     //1
//     if(location.pathname==="/login" && token){
//       //console.log("hello");
//       return <ToPage1 />
//     }
//     //2、
//     if(location.pathname!=="/login" && token===null){
//       //console.log("hello");
//       return <ToLogin />
//     }
//     return <Outlet />
// }


function App(props) {
  return (
    //<Outlet />
    //<BeforeRouterEnter />
    <Layout id='apppage'>
      <Header key={props.mykey} />
      <div className='container'>
        <Aside/>
        <div className='container_box'>
            <Bread/>
            <div className='container_content'>
              <Outlet />
            </div>
        </div>
      </div>
      <footer>Footer &copy; 2022 Author Vivi</footer>
     </Layout>
  )
}


export default  App
