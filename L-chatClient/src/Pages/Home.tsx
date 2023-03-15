import React from "react";
import TopSearch from './common/search'
import styles from "./Home.module.less";

export default function Home() {
  const css = (name: string) => {
    const nameList = name.split(" ");
    return nameList.map((item: string) => styles[`${item}`]).join(" ");
  };
  return (
    <div className={css("index-page")}>
      <div className={css("chat-list")}>
        <div className={css("search")}>
          <TopSearch></TopSearch>
        </div>
        <div className={css("chat-list-content")}></div>
      </div>
      <div className={css("chat-area")}></div>
    </div>
  );
}
