import React from "react";
import { Input, Form, Row, Col, Button, PageHeader, Typography } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setemail, setpass } from "../state/index";
import { useHistory } from "react-router-dom";
import { authService } from "../../fbase";
export default function Login() {
  const inputs = useSelector((state) => state.auth.inputs);
  const { email, password } = inputs;
  const history = useHistory();
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return dispatch(setemail(value));
      case "password":
        return dispatch(setpass(value));
      default:
        return null;
    }
  };
  const onSignIn = async () => {
    await authService.signInWithEmailAndPassword(email, password);
    history.push("/");
  };
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
          <Form>
            <Form.Item
              rules={[{ required: true, message: "email을 입력해 주세요!" }]}
            >
              <Input
                size="large"
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="ID를 입력해 주세요."
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: "password를 입력해 주세요!" }]}
            >
              <Input
                size="large"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="PASSWORD를 입력해 주세요."
                prefix={<KeyOutlined />}
              />
            </Form.Item>
          </Form>
          <Button style={{ width: "100%" }} type="primary" onClick={onSignIn}>
            로그인
          </Button>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 5 }}>
        <Col xs={18} sm={12} xl={6}>
          <Button
            onClick={() => {
              history.push("/account");
            }}
          >
            회원가입
          </Button>
        </Col>
      </Row>
    </>
  );
}
