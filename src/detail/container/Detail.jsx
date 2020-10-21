import React from "react";
import { Col, Descriptions, PageHeader, Row, Typography } from "antd";
import { useHistory } from "react-router-dom";

export default function Detail({ name }) {
  const history = useHistory();

  const result = {
    //받아와야할 구조
    title: "카페 더 나인",
    Address: "강남역 9번 출구",
    menu: "아메리카노",
    lineReview: "괜찮은 카페였다.",
    review: "",
  };
  return (
    <>
      <Row justify="center">
        <Col span={16}>
          <PageHeader onBack={() => history.push("/")} title={result.title}>
            <Descriptions layout="vertical" bordered={true} column={1}>
              <Descriptions.Item label="가게이름">
                <Typography.Text>{result.title}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="주소">
                <Typography.Text>강남역 9번출구</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="식사메뉴">
                <Typography.Text>아메리카노</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="한줄평">
                <Typography.Text>안녕</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="맛집 평가">
                <Typography.Text>
                  Ant Design, a design language for background applications, is
                  refined by Ant UED Team. Ant Design, a design language for
                  background applications, is refined by Ant UED Team. Ant
                  Design, a design language for background applications, is
                  refined by Ant UED Team. Ant Design, a design language for
                  background applications, is refined by Ant UED Team. Ant
                  Design, a design language for background applications, is
                  refined by Ant UED Team. Ant Design, a design language for
                  background applications, is refined by Ant UED Team.
                </Typography.Text>
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </Col>
      </Row>
    </>
  );
}
