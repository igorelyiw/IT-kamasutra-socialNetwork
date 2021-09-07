import { Table } from 'antd';
import React from'react';
import { NewsType } from '../../redux/newsReducer';
import s from './News.module.css'
type PropsType={
  news:Array<NewsType>
}
const News:React.FC<PropsType>=props=>{
  const{news}=props;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Text',
      dataIndex: 'body',
      key: 'body',
    },
  ];
    return(
      <div>
<Table key={Math.random()*5000} dataSource={news} columns={columns} />
      </div>
    )
}
export default News;