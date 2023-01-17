import React, { useEffect, useState } from 'react'
import { Button, PageHeader, Modal, Form, Input, message } from 'antd'
import moment from 'moment'
import E from 'wangeditor'
//import { ArticleAddApi, ArticleSearchApi, ArticleUpdateApi } from '../request/api'
import { useParams, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import MockArticleData from "../mock/MockArticleData"
import {useSelector,useDispatch} from "react-redux"

let editor = null

export default function Edit(props) {
  const [content, setContent] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')

  const [form] = Form.useForm();
  const navigate = useNavigate()
  let { pathname } = useLocation()
  let params = useParams()		// 得到当前路径的id
  const [articleData, setArticleData] = useState([]);

  // 处理请求数据
  // const dealData = (errCode, msg) => {
  //   setIsModalVisible(false); // 关闭对话框
  //   if (errCode === 0) {
  //     message.success(msg)
  //     setTimeout(() => {
  //       // 跳回list页面
  //       navigate('/listlist')
  //     }, 1500)
  //   } else {
  //     message.error(msg)
  //   }
  // }
  useEffect(() => {

    //const data=()=>{
    setArticleData(MockArticleData);
    //}
  }, [])
   // getdata
const { Articlearr } = useSelector((state) => ({
  Articlearr:state.Articlearr // 这里划曲线警告
  }));

  //Modal submitted and modify data
  const dispatch = useDispatch();
  const handleOk = () => {
    //close Modal
    //setIsModalOpen(false);
    form
      .validateFields()    // validate校验   field字段
      .then((values) => {
        form.resetFields();   // reset重置
        let { title, subTitle } = values;

        //   // 地址栏有id代表现在想要更新一篇文章

        if (params.id) {
          //     // 更新文章的请求
          //     ArticleUpdateApi({ title, subTitle, content, id: params.id }).then(res => dealData(res.errCode, res.message))
          //console.log(params.id-1);
          editor.txt.html(Articlearr[params.id-1].content)
        } else {
          //     // 添加文章的请求
          //     ArticleAddApi({ title, subTitle, content }).then(res => dealData(res.errCode, res.message))
          //   }

          const id = articleData.length + 1;
          //setArticleData(articleData+={ title, subTitle, content, id});
          //let newArticleData = [...articleData, { title, subTitle, content, id }] 
          //setArticleData(newArticleData);
          //console.log(articleData);
          let values = {title, subTitle, content, id}
          dispatch({ type: 'changeArticleData',value:values});
          setIsModalOpen(false);
          navigate('/listlist')
        }
      })
      .catch(() => false);

  }

  // 模拟componentDidMount
  useEffect(() => {
    editor = new E('#div1')
    editor.config.onchange = (newHtml) => {
      setContent(newHtml)
    }
    editor.create()

    //根据地址栏id做请求
    if (params.id) {
      // ArticleSearchApi({id: params.id}).then(res => {
      //   //console.log(res)
      //   if(res.errCode===0){
      //     //let {title,subTitle} = res.data;
      //     //setContent(content);
      //     editor.txt.html(res.data.content) // 重新设置编辑器内容
      //     setTitle(res.data.title)
      //     setSubTitle(res.data.subTitle)
      //   }
      // })
      console.log(params.id-1);
      editor.txt.html(Articlearr[params.id-1].content)

    }

  return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy()
    }
  }, [pathname])

  return (
    <div>
      <PageHeader
        ghost={false}
        onBack={params.id ? () => window.history.back() : null}
        title="Edit"
        subTitle={'Date: ' + moment(new Date()).format("YYYY-MM-DD")}
        extra={<Button key="1" type="primary" onClick={() => setIsModalOpen(true)}>Submit</Button>}
      > </PageHeader>

      <div id="div1" style={{ padding: '0 20px 20px', background: '#fff' }}></div>

      <Modal zIndex={99999} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={() => setIsModalOpen(false)} >

        <Form
          form={form}
          name="basic"
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
          autoComplete="off"
          //给弹出框设置初始值（通过name作为key找到并用定义）
          initialValues={{ title, subTitle }}
        >
          <Form.Item
            label="title"
            name="title"
            rules={[{ required: true, message: '请填写标题' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="subTitle"
            name="subTitle"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>

  )
}

  

