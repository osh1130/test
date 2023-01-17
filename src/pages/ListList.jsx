import React from 'react'
import { Pagination, List, Skeleton,Button,message } from 'antd'
import { useState,useEffect } from 'react'
import { ArticleListApi, ArticleDelApi } from '../request/api'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"


export default function Listlist() {
  const [list, setList] = useState([]);
  const [total,setTotal] = useState(0)
  const [current,setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(4)
  const navigate = useNavigate()
  const [update, setUpdate] = useState(1)
  
  //请求封装
  // const getList = (num) =>{
  //   ArticleListApi({
  //     num:current,
  //     count:pageSize
  //   }).then(res=>{
  //     console.log(res)
  //     //console.log(localStorage.getItem("cms-token"));
  //     if(res.errCode===0){
  //       let{arr,total, num,count} = res.data;
  //       setList(arr);
  //       setTotal(total);
  //       setCurrent(num);
  //       setPageSize(count);
  //     }
  //   })
  // }

  const { Articlearr } = useSelector((state) => ({
    Articlearr:state.Articlearr // 这里划曲线警告
    }));
  //请求列表数据 componentDidMount
  useEffect(()=>{
    //getList(current)
    //console.log(Articlearr);
    setList(Articlearr);
  },[])

  // 模拟componentDidUpdate
  useEffect(() => {
    //getList(current)
    setList(Articlearr);
  }, [update])

  const onChange = (page) => {
    //console.log(page);
    //setCurrent(page); 是异步的
    //getList(page);
  };

  const delFn = (id) => {
    //console.log(id);
    // ArticleDelApi({id}).then(res=>{
    //   //console.log(res)
    //   if(res.errCode===0){
    //     message.success(res.message)
    //     //重新刷页面，要么重新请求这个列表的数据 window.reload 调用getList(1) 增加变量的检测
    //     setUpdate(update+1)
    //   }
    // })
    Articlearr.splice(id-1,1);
    setUpdate(update+1);
    console.log(Articlearr);
  };


  return (
    <div className='listtable' style={{padding:'20px'}}>
        <List
        className="demo-loadmore-list"
        //loading={initLoading}
        itemLayout="horizontal"
        //loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions=
            {[<Button type='primary' onClick={()=>navigate('/edit/'+item.id)}>edit</Button>,
             <Button type='danger'onClick={()=>delFn(item.id)}>delet</Button>]}
          >
            <Skeleton loading={false} active>
              <List.Item.Meta
                //avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.subTitle}
              />
              <div>{moment(item.date).format("YYYY-MM-DD hh:mm:ss")}</div>
            </Skeleton>
          </List.Item>
        )}
      />
      <Pagination style={{float:'right',marginTop:'20px'}} onChange={onChange} total={total} current={current} pageSize={pageSize}/>
    </div>
  )
}
