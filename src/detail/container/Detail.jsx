import React, { useEffect, useState } from "react";
import { Col, Descriptions, PageHeader, Row, Typography } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

//파람스를 통해 posts에 filter를 사용해 원하는 객체를 가져오는것은 성공.
//detail state를 만들어서 변경해야할거 같다.
export default function Detail({ match }) {
  const [resultData, setResultData] = useState();
  const posts = useSelector((state) => state.search.posts);
  const { name } = match.params;
  console.log(posts);
  console.log(resultData);
  useEffect(() => {
    const result = posts.filter((item) => item.id === name);
    const data = result[0];
    setResultData(data);
  }, [posts]);
  const history = useHistory();
  return (
    <>
      {resultData && (
        <Row justify="center">
          <Col span={12}>
            <PageHeader
              onBack={() => history.push("/")}
              title={resultData.name}
            >
              <Descriptions
                style={{ marginTop: "50px" }}
                layout="vertical"
                bordered={true}
                column={1}
              >
                <Descriptions.Item label="가게이름">
                  <Typography.Text>{resultData.name}</Typography.Text>
                </Descriptions.Item>
                <Descriptions.Item label="주소">
                  <Typography.Text>{resultData.address}</Typography.Text>
                </Descriptions.Item>
                <Descriptions.Item label="식사메뉴">
                  <Typography.Text>{resultData.menu}</Typography.Text>
                </Descriptions.Item>
                <Descriptions.Item label="한줄평">
                  <Typography.Text>{resultData.tagline}</Typography.Text>
                </Descriptions.Item>
                <Descriptions.Item label="맛집 평가">
                  <Typography.Text>{resultData.review}</Typography.Text>
                </Descriptions.Item>
              </Descriptions>
            </PageHeader>
          </Col>
        </Row>
      )}
    </>
  );
}
