import {
  FileOutlined,
  PhoneOutlined,
  PictureOutlined,
  ScissorOutlined,
  SmileOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import styles from "./chatarea.module.less";
import ChatHeader from "./components/header/ChatHeader";
import MessageList from "./components/message-list/MessageList";
type Props = {};

const ChatArea = (props: Props) => {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);
  const changeShowState = () => {
    setIsShowDrawer(!isShowDrawer);
  };
  const css = (name: string) => {
    const nameList = name.split(" ");
    return nameList.map((item) => styles[`${item}`]).join(" ");
  };
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
              <SmileOutlined style={{ margin: "0 10px 0 0" }} />
              <ScissorOutlined />
            </div>
            <div>
              <PhoneOutlined />
              <VideoCameraOutlined style={{ margin: "0 10px" }} />
            </div>
          </div>
          <div className={css("operation")}>
            <Button type="default" size="small">
              清空
            </Button>
            <Button type="primary" size="small" style={{ margin: "0 10px" }}>
              发送
            </Button>
          </div>
          <textarea title="" name="chat" className={css("textarea")}></textarea>
          <div className="ImgSelect"></div>
          <div className="emojiCustom"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
