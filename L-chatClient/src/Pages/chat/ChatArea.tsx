import { Drawer } from "antd";
import React, { useState } from "react";
import styles from "./chatarea.module.less";
import ChatHeader from "./components/header/ChatHeader";
type Props = {};

const ChatArea = (props: Props) => {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);
  const changeShowState = () =>{
    setIsShowDrawer(!isShowDrawer);
  }
  const css = (name: string) => {
    const nameList = name.split(" ");
    return nameList.map((item) => styles[`${item}`]).join(" ");
  };
  return (
    <div className={css("chat-area")}>
      <ChatHeader setIsShowDrawer={changeShowState}/>
      <div className={css("chat-info-content")}>
        <Drawer style={{height: '100%'}} getContainer={false} title="Basic Drawer" placement="right"  open={isShowDrawer}></Drawer>
        <div className={css("send-type")}></div>
        <div className={css("operation")}></div>
        <textarea title="" name="chat" className={css("textarea")}></textarea>
        <div className="ImgSelect"></div>
        <div className="emojiCustom"></div>
      </div>
    </div>
  );
};

export default ChatArea;
