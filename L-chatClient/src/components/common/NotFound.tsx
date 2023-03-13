import React from 'react'
import style from './notFound.module.less'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate  =  useNavigate();

  const buddle = ()=>{
    let start = new Date().getTime();
    let handle = {value: 0};
  }
  return (
    <div className={style['err-page']}>
      <div className={style['err-text']}>页面走丢了（╯－＿－），访问其他页面试试吧(ง •̀_•́)ง</div>
      <Button className={style.back} type='primary' onClick={ ()=>navigate(-1)}>返回上一级</Button>
    </div>
  )
}
