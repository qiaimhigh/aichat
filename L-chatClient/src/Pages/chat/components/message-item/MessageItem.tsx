import { CheckCircleOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import React from "react";
import styles from "./item.module.less";

type Props = {};

const MessageItem = (props: Props) => {
  const css = (name: string) => {
    const nameList = name.split(" ");
    return nameList.map((item) => styles[`${item}`]).join(" ");
  };
  const messageItem = {
    messageType: "sys",
  };
  const contentClassName = () => {
    let res = "";
    switch (messageItem.messageType) {
      case "sys": {
        res = "sys-content";
        break;
      }
      case "img": {
        res = "img-content";
        break;
      }
      default: {
        res = "normal-content";
        break;
      }
    }
    return res;
  }; 
  return (
    <div className={css("chat-area-message-item")}>
      <Avatar
        className={css("avatar")}
        shape="square"
        size={40}
        src="https://ts1.cn.mm.bing.net/th/id/R-C.39905580de08b0220fc3d2b507d25a16?rik=Hf%2bL5c5OwJpMWQ&riu=http%3a%2f%2fguangyuanol.cn%2fuploads%2fallimg%2f200422%2f1RK21412-10.jpg&ehk=uxnCV0tOa6wOzY5RpF7w4I4w5X0TFZbIIlQEpN3htvA%3d&risl=&pid=ImgRaw&r=0"
      ></Avatar>
      <div className={css("message-content")}>
        <span className={css("item-message header")}>
          <span className={css("name item")}>Richie</span>
          <span className={css("time item")}>2023-03-12 12:00:00</span>
        </span>
        <div className={css(`message-info ${contentClassName}`)}>
          <span className={css("message-wrapper")}>
            <span>你好</span>
            <Tooltip title="已读" className={css("item")}>
              <CheckCircleOutlined />
            </Tooltip>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
