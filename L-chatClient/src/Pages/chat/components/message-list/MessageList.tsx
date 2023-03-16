import { LoadingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./list.module.less";

type Props = {};

const MessageList = (props: Props) => {
  const css = (name: string) => {
    const nameList = name.split(" ");
    return nameList.map((item) => styles[`${item}`]).join(" ");
  };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  return (
    <div className={css("chat-area-message-list")}>
      <div className={css("top-operation")}>
        {hasMore &&
          ((
            <span>
              <span className={css("get-more-message")}>点击加载更多...</span>
              {isLoading && <LoadingOutlined />}
            </span>
          ) || <span className={css("no-more")}>没有更多了</span>)}
      </div>
      <div className={css("")}>

      </div>
    </div>
  );
};

export default MessageList;
