import React from "react";
import { AutoComplete, Col, Input, Row, Typography } from "antd";
import Setting from "../component/Setting";
export default function Search() {
  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Setting />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title strong>모 두 의 맛 집</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col span={12} style={{ background: "#333" }}>
          <AutoComplete
            autoFocus
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{ width: "100%" }}
            options={[]}
          >
            <Input.Search size="large" placeholder="검색어를 입력하세요" />
          </AutoComplete>
        </Col>
      </Row>
    </>
  );
}
