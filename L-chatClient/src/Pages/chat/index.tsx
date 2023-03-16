import React from 'react'
import style from './index.module.less'
import ChatArea from './ChatArea'

export default function ChatPage() {
  return (
    <div className={style['chat-view-page']} style={{height: '100%'}}>
      <div className={style['chat-view-container']} style={{height: '100%'}}>
        <ChatArea></ChatArea>
      </div>
    </div>
  )
}
