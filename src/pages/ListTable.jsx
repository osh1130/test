import React, {useEffect, useState} from 'react'
import './less/ListTable.less'
import { Space, Table, Button, Pagination } from 'antd'
import {ArticleListApi} from '../request/api'
import moment from 'moment'

function MyTitle(props){
  return (
  <div>
    <div>
        <a className='tabletitle' href={'http://codesohigh.com:8765/article'+props.id} target='_blank'>{props.title}</a>
        <p style={{color:'#999'}}>{props.subTitle}</p>
        </div>
  </div>
  )}


export default function Listtable() {

    //列表数据
    const [arr,setArr]=useState([])
    //const [pagination,setPagination] =useState({current:2,pageSize:2})

    //封装请求的函数
    const getArticleList = () =>{
      ArticleListApi().then(res=>{
        //console.log(res.data)
        if(res.errCode===0){
            let newarr = JSON.parse(JSON.stringify(res.data.arr));
            let myarr=[]

            newarr.map(item=>{
                //item.key=item.id;
                //item.date=moment(item.date).format("YYYY-MM-DD hh:mm:ss");
                //item.mytitle = `
                //    <div>
                //        <Link className='tabletitle' to="/">${item.title}</Link>
                //        <p style={{color:'#999'}}>${item.subTitle}</p>
                //    </div>
                //`;
                let obj={
                  key:item.id,
                  date:moment(item.date).format("YYYY-MM-DD hh:mm:ss"),
                  mytitle:<MyTitle title={item.title} subTitle={item.subTitle}/>
                }
                myarr.push(obj);
            })
            //console.log(newarr)
            setArr(myarr);
        }
    })
    }

    //请求文章列表，模仿mounted
    useEffect(()=>{
      getArticleList();
    },[])

    //分页函数
    //const pageChange = (pagination) =>{
    //  console.log(pagination)
    //}

    //每一列
    const columns = [
        {
          dataIndex: 'mytitle',
          key: 'mytitle',
          width: '60%',
          render: (text) => (
            <div>{text}</div>
          ),
        },
        {
          dataIndex: 'date',
          key: 'date',
          render: (text) => (
            <p>{text}</p>
          ),
        },
        {
          key: 'action',
          render: (text) => (
            <Space size="middle">
              <Button type='primary' onClick={()=>(console.log(text.key))}>edit</Button>
              <Button type='danger' onClick={()=>(console.log(text.key))}>Delete</Button>
            </Space>
          ),
        },
      ];


  return (
    <div className='listtable'>
        <Table showHeader={false} 
        columns={columns} 
        dataSource={arr} 
        
        />
    </div>
  )
}
