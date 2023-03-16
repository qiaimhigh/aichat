import { MenuOutlined } from '@ant-design/icons'
import React from 'react'
import styles from "./chat.module.less"


const ChatHeader = (props: any) => {
  const {setIsShowDrawer} = props;
  const css = (name: string) => {
    const nameList = name.split(" ");
    return nameList.map(item=> styles[`${item}`]).join(" ");
  }
  return (
    <div className={css("header-content")}>
        <span className={css("header-name")}>Richie</span>
        <MenuOutlined onClick={setIsShowDrawer} className={css("icon-header")}/>
    </div>
  )
}

export default ChatHeader