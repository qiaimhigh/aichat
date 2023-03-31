import {
  FileOutlined,
  PhoneOutlined,
  PictureOutlined,
  ScissorOutlined,
  SmileOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Drawer, message } from "antd";
import React, { useState } from "react";
import styles from "./chatarea.module.less";
import ChatHeader from "./components/header/ChatHeader";
import MessageList from "./components/message-list/MessageList";
import Cas from "../../components/customUploading/Index";
import _ from "lodash";
import EmojiContent from './components/emoji'
type Props = {};

const ChatArea = (props: Props) => {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);
  const [textMsg, setTextMsg] = useState('');
  const changeShowState = () => {
    setIsShowDrawer(!isShowDrawer);
  };
  const css = (name: string) => {
    const nameList = name.split(" ");
    return nameList.map((item) => styles[`${item}`]).join(" ");
  };
  // 发送消息
  const sendMsg = () => {
    message.info("发送消息");
  };
  // 回车发送
  const handleKeyDown = _.throttle(({ code }: any) => {
    if (code === "Enter") {
      message.info("发送信息");
      setTextMsg("");
    }
  }, 1240);
  // 发送表情
  const chooseEmoji = (emoji:string ="")=>{
    setTextMsg(textMsg + emoji)
  }
  // 发送图片
  const choosePic = ()=>{

  }
  // 聊天框数据变化
  const onMessageChange = (msg: string)=>{
    
  }

  return (
    <div className={css("chat-area")}>
      <ChatHeader setIsShowDrawer={changeShowState} />
      <div className={css("chat-message-content")}>
        {/* <Drawer
          style={{height:"calc(100% - 60px)"}}
          getContainer={false}
          placement="right"
          open={isShowDrawer}
        ></Drawer> */}
        <div className={css("chat-info-content")}>
          <div className={css("chat-message-list")}>
            <MessageList></MessageList>
          </div>
          <div className={css("group-desc")}></div>
        </div>
        <div className={css("info-edit-content")}>
          <div className={css("send-type")}>
            <div>
              <PictureOutlined />
              <FileOutlined style={{ margin: "0 10px" }} />
              <EmojiContent onChooseEmoji={chooseEmoji}></EmojiContent>
              <ScissorOutlined />
            </div>
            <div>
              <PhoneOutlined />
              <VideoCameraOutlined style={{ margin: "0 10px" }} />
            </div>
          </div>
          <div className={css("operation")}>
            <Button type="default" size="small" onClick={()=>{setTextMsg("")}}>
              清空
            </Button>
            <Button
              onClick={sendMsg}
              type="primary"
              size="small"
              style={{ margin: "0 10px" }}
            >
              发送
            </Button>
          </div>
          <textarea
            onKeyDown={handleKeyDown}
            title=""
            name="chat"
            className={css("textarea")}
            value={textMsg}
            onChange={(e)=>{setTextMsg(e.target.value)}}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
