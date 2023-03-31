import React, { FC, useState } from "react";
import { Tooltip } from "antd";
import styles from "./index.module.less";
import { HeartOutlined, MehOutlined } from "@ant-design/icons";
import { defaultEmojiIconGroup1, collectIcons } from "./mock-emoji";

const DefaultEmoji = (onEmojiItemClick: any) => {
  return (
    <div className={styles["emoticon-icons"]}>
      {defaultEmojiIconGroup1?.map((item) => {
        return (
          <Tooltip title={item.name} key={item.id}>
            <div
              className={styles["emoticon-box"]}
              onClick={() => onEmojiItemClick(item)}
            >
              <img
                className={styles["emoticon-item"]}
                src={item.path}
                alt={item.name}
              />
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};

const CollectEmoji = (onEmojiItemClick: any) => {
  return (
    <div className={styles["collect-icons"]}>
      {collectIcons?.map((item) => {
        return (
          <Tooltip title={item.name} key={item.id}>
            <div
              className={styles.collect}
              onClick={() => onEmojiItemClick(item)}
            >
              <img src={item.path} alt={item.name} />
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};

type Props = {
  onChooseItem: (emoji: any) => void;
};
// 表情面板
const EmojiBox: FC<Props> = ({ onChooseItem }) => {
  // 0-默认表情 1-收藏表情
  const [emoticonType, setEmojiType] = useState(0);
  return (
    <div className={styles["emoticon-card"]}>
      <span className={styles["emoticon-title"]}>
        {emoticonType === 0 ? "默认表情" : "收藏表情"}
      </span>
      <div className={styles["emoticon-content"]}>
        {emoticonType === 0 ? (
          <DefaultEmoji onEmojiItemClick={onChooseItem}></DefaultEmoji>
        ) : (
          <CollectEmoji onEmojiItemClick={onChooseItem}></CollectEmoji>
        )}
      </div>
      <div className={styles["emoticon-type"]}>
        <Tooltip title="默认表情">
          <MehOutlined onClick={() => setEmojiType(0)} />
        </Tooltip>
        <Tooltip title="收藏表情">
          <HeartOutlined
            onClick={() => setEmojiType(1)}
            className={styles.collect}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default EmojiBox;
