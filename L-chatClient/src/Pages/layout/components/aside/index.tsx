import React, { useState } from "react";
import style from "./index.module.less";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import {
  CodepenCircleOutlined,
  DingtalkOutlined,
  DribbbleOutlined,
  GithubOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Aside() {
  const useInfo = {
    nickName: "Richie",
  };
  const css = (name: string): string => {
    const classList: string[] = name.split(" ");
    return classList.map((item: string) => style[`${item}`]).join(" ");
  };
  return (
    <div className={css("aside-box")}>
      <div className={css("avatar")}>
        <NavLink to={"/"}>
          <Avatar
            shape="square"
            size={50}
            icon={<UserOutlined></UserOutlined>}
          ></Avatar>
        </NavLink>
        <span className={css('nickName')}>{useInfo.nickName}</span>
      </div>
      <div className={css("nav-list")}>
        <NavLink  to={"/"} title="加好友">
          <span className={css('nav-item')}>
            <UserAddOutlined />
          </span>
        </NavLink>
        <NavLink to={"/"} title="朋友圈">
          <span className={css('nav-item')}>
            <DribbbleOutlined />
          </span>
        </NavLink>
        <NavLink to={"/"} title="收藏">
          <span className={css('nav-item')}>
            <CodepenCircleOutlined />
          </span>
        </NavLink>
        <NavLink to={"/"} title="飞书">
          <span className={css('nav-item')}>
            <DingtalkOutlined />
          </span>
        </NavLink>
        <NavLink to={"/"}>
          <span className={css('nav-item')}>
            <GithubOutlined />
          </span>
        </NavLink>
      </div>
      <div className={css("aside-operation")}>
          <SettingOutlined  className={css('opera-item')}/>
      </div>
    </div>
  );
}
