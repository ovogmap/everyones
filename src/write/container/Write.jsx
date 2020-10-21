import React from "react";
import {
  Button,
  Col,
  Descriptions,
  Input,
  PageHeader,
  Row,
  Typography,
} from "antd";
import { useHistory } from "react-router-dom";

export default function Write() {
  const history = useHistory();
  return (
    <div style={{ paddingBottom: "50px" }}>
      <Row justify="center" style={{ padding: 20 }}>
        <Col span={12}>
          <PageHeader
            className="site-page-header"
            onBack={() => {
              history.goBack();
            }}
            title="맛 집 작 성"
            subTitle="오늘의 맛집을 작성해 주세요."
          />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 40 }}>
        <Col>
          <Typography.Title>오 늘 의 맛 집</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={12}>
          <Descriptions layout="vertical" bordered={true} column={1}>
            <Descriptions.Item label="가게이름">
              <Input placeholder="가게이름을 작성해 주세요." bordered={false} />
            </Descriptions.Item>
            <Descriptions.Item label="주소">
              <Input placeholder="주소를 작성해 주세요." bordered={false} />
            </Descriptions.Item>
            <Descriptions.Item label="식사메뉴">
              <Input placeholder="식사메뉴를 작성해 주세요." bordered={false} />
            </Descriptions.Item>
            <Descriptions.Item label="한줄평">
              <Input placeholder="한줄평을 작성해 주세요." bordered={false} />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 10 }}>
        <Col span={12}>
          <Typography.Text strong style={{ paddingLeft: 10 }}>
            본문
          </Typography.Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 5 }}>
        <Col span={12}>
          <Input.TextArea
            showCount
            maxLength={1000}
            autoSize={{ minRows: 15, maxRows: 15 }}
            placeholder="오늘 다녀온 맛집은 어떠셨나요?"
          />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 5 }}>
        <Col span={12}>
          <Button>작성완료</Button>
        </Col>
      </Row>
    </div>
  );
}
