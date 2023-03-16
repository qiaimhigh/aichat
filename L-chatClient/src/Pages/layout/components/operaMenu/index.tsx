import { DribbbleOutlined, SettingOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.less";

export default function OperaMenu() {
  const css = (name: string): string => {
    const classList: string[] = name.split(" ");
    return classList.map((item: string) => style[`${item}`]).join(" ");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <NavLink to="/">
          <span>个人设置</span>
        </NavLink>
      ),
      icon: <DribbbleOutlined />,
    },
    {
      key: "2",
      label: (
        <NavLink to="/">
          <span>系统消息</span>
        </NavLink>
      ),
      icon: <DribbbleOutlined />,
    },
    {
      key: "3",
      label: (
        <NavLink to="/">
          <span>个人设置</span>
        </NavLink>
      ),
      icon: <DribbbleOutlined />,
    },
    {
      key: "4",
      label: (
        <NavLink to="/">
          <span>反馈</span>
        </NavLink>
      ),
      icon: <DribbbleOutlined />,
    },
    {
      key: "5",
      label: (
        <NavLink to="/">
          <span>主题设置</span>
        </NavLink>
      ),
      icon: <DribbbleOutlined />,
    },
    {
      key: "6",
      label: (
        <NavLink to="/login">
          <span>退出登录</span>
        </NavLink>
      ),
      icon: <DribbbleOutlined />,
    },
  ];

  return (
    <div className={css("opera-box")}>
      <Dropdown placement="topRight" menu={{ items }}>
        <SettingOutlined style={{color: "#949497"}} className={css("opera-item")} />
      </Dropdown>
    </div>
  );
}
