import React from "react";
import { Input, Form, Row, Col, Button, PageHeader, Typography } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setinput, newaccount } from "../state/index";
import { useHistory } from "react-router-dom";
export default function Login() {
  const history = useHistory();
  const currUser = useSelector((state) => state.auth.currUser);
  const account = useSelector((state) => state.auth.newaccount);
  const { email, password, nickname } = currUser;
  console.log(currUser);
  const dispatch = useDispatch();
  function onFinish({ email, password }) {
    dispatch(setinput(email, password));
  }
  function onClick() {
    dispatch(account());
  }
  return (
    <>
      <Row justify="center" style={{ padding: 20 }}>
        <Col xs={24} sm={16} xl={12}>
          <PageHeader
            className="site-page-header"
            onBack={() => {
              history.goBack();
            }}
            title="로그인"
          />
        </Col>
      </Row>
      <Row justify="center" style={{ paddingTop: 100 }}>
        <Col>
          <Typography.Title strong>모 두 의 맛 집</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col xs={18} sm={12} xl={6}>
          <Form onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "email을 입력해 주세요!" }]}
            >
              <Input
                size="large"
                type="text"
                placeholder="ID를 입력해 주세요."
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "password를 입력해 주세요!" }]}
            >
              <Input
                size="large"
                type="password"
                placeholder="PASSWORD를 입력해 주세요."
                prefix={<KeyOutlined />}
              />
            </Form.Item>
            <Input
              style={{ marginTop: 5, background: "#1890ff", color: "#fff" }}
              size="large"
              type="submit"
              value="로그인"
            />
          </Form>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 5 }}>
        <Col xs={18} sm={12} xl={6}>
          <Button onClick={onClick}>회원가입</Button>
        </Col>
      </Row>
    </>
  );
}
