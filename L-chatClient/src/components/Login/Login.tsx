import { Avatar, Button, Checkbox, Col, Form, Input, message, Row } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import _ from "lodash";
import "./login.less";
import UploadAvatar from "../uploadAvatar";


export default function Login() {
  const [status, setStatus] = useState(true);
  // 控制验证码
  const [vercode, setVercode] = useState(true);
  const onFinish = _.throttle((values: any) => {}, 3000);

  const onFinishFailed = _.throttle(() => {
    message.error("提交失败请稍后重试！");
  }, 3000);
  // 刷新验证码
  const getCode = () => {};
  return (
    <div className="login-page">
      <div className="wrapper">
        {status && (
          <Form
            className="login-form"
            name="userForm"
            onValuesChange={_.throttle(() => {
              message.info("字段值发生改变");
            }, 1000)}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            labelCol={{ span: 6 }}
          >
            <div className="avatar">
              <Avatar
                size={90}
                icon={<UserOutlined />}
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></Avatar>
            </div>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "请输入账号" }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item label="验证码" className="vercode">
              <Row gutter={6}>
                <Col span={14}>
                  <Form.Item
                    name="vercode"
                    rules={[{ required: true, message: "请输入验证码" }]}
                  >
                    <Input placeholder="验证码(不区分大小写)"></Input>
                  </Form.Item>
                </Col>
                <Col span={10}>
                  {!vercode && (
                    <canvas
                      width="10"
                      height="10"
                      onClick={() => getCode()}
                    ></canvas>
                  )}
                  {vercode && <span style={{ width: "40px" }}>获取中...</span>}
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="remember">
              <Checkbox style={{ padding: "0 20px" }}>记住我</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="login-btn" htmlType="submit">
                登陆
              </Button>
              <span style={{ marginLeft: "50px" }}>
                没有账号？
                <span
                  onClick={() => {
                    setStatus(!status);
                  }}
                  className="checkout"
                >
                  去注册
                </span>
              </span>
            </Form.Item>
          </Form>
        )}
        {!status && (
          <Form
            labelCol={{ span: 8 }}
            name="userForm"
            onValuesChange={() => {
              message.info("字段值发生改变");
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="register-form"
          >
            <div className="avatar">
              <Avatar
                style={{ cursor: "pointer"}}
                size={90}
                icon={<UserOutlined />}
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></Avatar>
              <UploadAvatar />
            </div>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "请输入账号" }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirm"
              rules={[{ required: true, message: "请确认密码" }]}
            >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item label="验证码" className="vercode">
              <Row gutter={6}>
                <Col span={14}>
                  <Form.Item
                    name="vercode"
                    rules={[{ required: true, message: "请输入验证码" }]}
                  >
                    <Input placeholder="验证码(不区分大小写)"></Input>
                  </Form.Item>
                </Col>
                <Col span={10}>
                  {!vercode && (
                    <canvas
                      width="10"
                      height="10"
                      onClick={() => getCode()}
                    ></canvas>
                  )}
                  {vercode && <span style={{ width: "40px" }}>获取中...</span>}
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="login-btn" htmlType="submit">
                登陆
              </Button>
              <span style={{ marginLeft: "50px" }}>
                已有账号？
                <span
                  onClick={() => {
                    setStatus(!status);
                  }}
                  className="checkout"
                >
                  去登陆
                </span>
              </span>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
}
