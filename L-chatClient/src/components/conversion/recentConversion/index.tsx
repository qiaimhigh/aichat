import React from "react";
import styles from "./index.module.less";
import ConversionItem from "../conversionItem";

type Props = {};

const Index = (props: Props) => {
  const css = (name: string) => {
    return styles[`name`];
  };
  const messageList = [
    {
      avatar: "https://ts1.cn.mm.bing.net/th/id/R-C.39905580de08b0220fc3d2b507d25a16?rik=Hf%2bL5c5OwJpMWQ&riu=http%3a%2f%2fguangyuanol.cn%2fuploads%2fallimg%2f200422%2f1RK21412-10.jpg&ehk=uxnCV0tOa6wOzY5RpF7w4I4w5X0TFZbIIlQEpN3htvA%3d&risl=&pid=ImgRaw&r=0",
      nickName: "Richie",
      remarksName: "大哥",
      message: "在吗在吗",
      msgDate: "2023-03-16 11:11:11",
    },
    {
      avatar: "https://ts1.cn.mm.bing.net/th/id/R-C.09f08b85f2280933e4a7dcb2bc591e8d?rik=itaxIov%2bBvBWMw&riu=http%3a%2f%2fimg.wxcha.com%2fm00%2ff3%2f29%2f09c159ce965c65015c22807a9b09299f.jpg&ehk=ckt8tCg22l0A7CU5pp9rAY4sOAnj2IOGKH7G4THlP1M%3d&risl=&pid=ImgRaw&r=0",
      nickName: "YaoYao",
      remarksName: "大姐大",
      message: "你小子",
      msgDate: "2023-03-16 11:11:11",
    },
  ];

  const isHasMsg: boolean = Array.isArray(messageList) && messageList.length > 0;
  return (
    <div className={css("recent-page")}>
      <div className={css("recent-list")}>
        {isHasMsg &&
          messageList.map((msg) => {
            return <ConversionItem messageInfo={msg}></ConversionItem>;
          })}
      </div>
      {!isHasMsg && <div className={"no-message"}></div>}
    </div>
  );
};

export default Index;
