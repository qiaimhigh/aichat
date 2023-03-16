import { Avatar, message } from "antd";
import React, { FC } from "react";
import styles from "./index.module.less";

type MessageInfo = {
  nickName: string;
  remakeName?: string;
  message: string;
  msgDate: string;
  avatar: string;
};

type Props = {
  messageInfo: MessageInfo;
};

const Index: FC<Props> = ({ messageInfo }) => {
  const css = (name: string) => {
    const nameList = name.split(" ");
    return nameList
      .map((item) => {
        return styles[`${item}`];
      })
      .join(" ");
  };

  return (
    <div className={css("message-item")}>
      <div className={css("avatar")}>
        <Avatar
          shape="square"
          src={messageInfo.avatar}
          size={46}
          style={{ margin: "6px" }}
        />
      </div>
      <div className={css("message-detail")}>
        <span className={css("top-nick-name ellipsis")} style={{}}>
          {(messageInfo.nickName && (
            <span className={css("nick-name")}>{messageInfo.nickName}</span>
          )) ||
            (messageInfo.remakeName && (
              <span className={css("nick-name")}>{messageInfo.nickName}</span>
            )) ||
            "暂无昵称"}
          {messageInfo.msgDate && (
            <span className={css("new-date")}>{messageInfo.msgDate}</span>
          )}
        </span>
        <span className={css("bottom-info ellipsis")}>
          {messageInfo.message && (
            <span className={css("last-news")}>{messageInfo.message}</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Index;
