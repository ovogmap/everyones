import React, { useEffect } from "react";
import { Input, Form, Row, Col, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "../component/AuthLayout";
import { setemail, setpassword, setnickname, fail } from "../state/index";
import { authService } from "../../fbase";
import { setUser } from "../../common/state";
import { useHistory } from "react-router-dom";
export default function Account() {
  const inputs = useSelector((state) => state.account.inputs);
  const currUser = useSelector((state) => state.main.currUser);
  const { email, password, nickname } = inputs;
  const dispatch = useDispatch();
  const history = useHistory();
  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return dispatch(setemail(value));
      case "password":
        return dispatch(setpassword(value));
      case "nickname":
        return dispatch(setnickname(value));
      default:
    }
  };
  const onCreateNickname = async (user) => {
    await user.user.updateProfile({
      displayName: inputs.nickname,
    });
  };
  const onCreateAccount = async () => {
    try {
      const user = await authService.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      onCreateNickname(user);
    } catch (e) {
      dispatch(fail(e));
    }
    history.push("/login");
  };
  return (
    <AuthLayout onCreateAccount={onCreateAccount}>
      <Form.Item
        rules={[{ required: true, message: "email을 입력해 주세요!" }]}
      >
        <Input
          name="email"
          size="large"
          type="text"
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
      <Form.Item>
        <Input
          size="large"
          name="nickname"
          type="text"
          value={nickname}
          onChange={onChange}
          placeholder="nickname을 입력해 주세요."
          prefix={<UserOutlined />}
        />
      </Form.Item>
    </AuthLayout>
  );
}
