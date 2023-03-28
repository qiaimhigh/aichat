import React, { useState } from "react";
import DefaultEmoji from "./defaultEmoji";
import CollectEmoji from "./collectEmoji";
import { Tooltip } from "antd";

type Props = {
  onChooseItem: () => void;
};

const EmojiBox = (props: Props) => {
  // 0-默认表情 1-收藏表情
  const [emoticonType, setEmojiType] = useState(0);
  return (
    <div className={"saa"}>
      <div>
        {emoticonType === 0 ? (
          <DefaultEmoji></DefaultEmoji>
        ) : (
          <CollectEmoji></CollectEmoji>
        )}
      </div>
      <div>
        <Tooltip title="默认表情">

        </Tooltip>
        <Tooltip title="收藏表情">
          
        </Tooltip>
      </div>
    </div>
  );
};

export default EmojiBox;
