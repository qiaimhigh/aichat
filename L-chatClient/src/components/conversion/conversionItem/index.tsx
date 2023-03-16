import { Avatar } from "antd";
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
    return styles[`${name}`];
  };

  return (
    <div className={css("message-item")}>
      <div className={css("avatar")}>
        <Avatar src={messageInfo.avatar} size={64}/>
      </div>
      <div className={css("message-detail")}></div>
    </div>
  );
};

export default Index;
