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
import OperaMenu from "../operaMenu";

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
            src="https://tupian.qqw21.com/article/UploadPic/2020-4/2020492231947451.jpg"
            icon={<UserOutlined></UserOutlined>}
          ></Avatar>
        </NavLink>
        <span className={css('nickName')}>{useInfo.nickName}</span>
      </div>
      <div className={css("nav-list")}>
        <NavLink  to={"/"} title="加好友">
          <span className={css('nav-item')}>
            <UserAddOutlined style={{color: "#949497"}}/>
          </span>
        </NavLink>
        <NavLink to={"/"} title="朋友圈">
          <span className={css('nav-item')}>
            <DribbbleOutlined style={{color: "#949497"}}/>
          </span>
        </NavLink>
        <NavLink to={"/"} title="收藏">
          <span className={css('nav-item')}>
            <CodepenCircleOutlined style={{color: "#949497"}}/>
          </span>
        </NavLink>
        <NavLink to={"/"} title="飞书">
          <span className={css('nav-item')}>
            <DingtalkOutlined style={{color: "#949497"}}/>
          </span>
        </NavLink>
        <NavLink to={"/"}>
          <span className={css('nav-item')}>
            <GithubOutlined style={{color: "#949497"}}/>
          </span>
        </NavLink>
      </div>
      <div className={css("aside-operation")}>
          <OperaMenu></OperaMenu>
      </div>
    </div>
  );
}
