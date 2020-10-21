import { Col, PageHeader, Row, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Title() {
  const history = useHistory();
  const newaccount = useSelector((state) => state.auth.newaccount);
  return (
    <>
      <Row justify="center" style={{ padding: 20 }}>
        <Col xs={24} sm={16} xl={12}>
          <PageHeader
            className="site-page-header"
            onBack={() => {
              history.goBack();
            }}
            title={newaccount ? "회원가입" : "로그인"}
          />
        </Col>
      </Row>
      <Row justify="center" style={{ paddingTop: 100 }}>
        <Col>
          <Typography.Title strong>모 두 의 맛 집</Typography.Title>
        </Col>
      </Row>
    </>
  );
}

export default Title;
