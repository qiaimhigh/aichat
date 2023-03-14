import React from "react";
import { Layout } from "antd";
import style from "./index.module.less";
import Component from "./components/index";
const { Aside, HeaderTop, OperaMenu } = Component;

export default function LayOut() {
  return (
    <div className={style["layout-page"]}>
      <main className={style["chat-container"]}>
          <div className={style["chat-message-aside"]}>
            <Aside></Aside>
          </div>
          <div className={style["chat-message-content"]}>

          </div>
      </main>
    </div>
  );
}
