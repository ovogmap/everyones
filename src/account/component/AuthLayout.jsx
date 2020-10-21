import React from "react";
import { Col, PageHeader, Row, Typography, Form, Button } from "antd";
import { useHistory } from "react-router-dom";

export default function AuthLayout({ children, onCreateAccount }) {
  const history = useHistory();
  return (
    <>
      <Row justify="center" style={{ padding: 20 }}>
        <Col xs={24} sm={16} xl={12}>
          <PageHeader
            className="site-page-header"
            onBack={() => {
              history.goBack();
            }}
            title="회원가입"
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
          <Form>{children}</Form>
          <Button
            style={{ width: "100%" }}
            type="primary"
            onClick={onCreateAccount}
          >
            회원가입 하기
          </Button>
        </Col>
      </Row>
    </>
  );
}
