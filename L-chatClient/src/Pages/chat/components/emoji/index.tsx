import { Tooltip } from "antd";
import EmojiBox from "./EmojiBox";
import React, { FC } from "react";
import { SmileOutlined } from "@ant-design/icons";
import styles from "./index.module.less";

type Props = {
  onChooseEmoji: () => void;
};

const Index: FC<Props> = ({ onChooseEmoji }) => {
  return (
    <>
      <Tooltip
        color="white"
        trigger="click"
        overlayClassName={styles["alert-emoji"]}
        title={<EmojiBox onChooseItem={onChooseEmoji}></EmojiBox>}
      >
        <SmileOutlined style={{ margin: "0 10px 0 0" }} />
      </Tooltip>
    </>
  );
};

export default Index;
