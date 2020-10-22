import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Descriptions,
  Input,
  PageHeader,
  Row,
  Select,
  Typography,
} from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userInfo,
  setName,
  setAddress,
  setMenu,
  setTagline,
  setReview,
} from "../state/index";
import { storeService } from "../../fbase";

export default function Write() {
  const { Option } = Select;
  const post = useSelector((state) => state.write.post);
  const currUser = useSelector((state) => state.main.currUser);
  const { name, address, menu, tagline, review } = post;
  const history = useHistory();
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        return dispatch(setName(value));
      case "menu":
        return dispatch(setMenu(value));
      case "tagline":
        return dispatch(setTagline(value));
      case "review":
        return dispatch(setReview(value));
      default:
        break;
    }
  };
  function handleChange(value) {
    dispatch(setAddress(value));
  }
  useEffect(() => {
    if (currUser) {
      const { displayName, uid } = currUser;
      dispatch(userInfo(displayName, uid));
    }
  }, [currUser]);
  const onClick = async () => {
    await storeService.collection("posts").add(post);
    history.push("/");
  };
  return currUser ? (
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
              <Input
                placeholder="가게이름을 작성해 주세요."
                value={name}
                name="name"
                onChange={onChange}
                bordered={false}
              />
            </Descriptions.Item>
            <Descriptions.Item label="위치">
              <Select
                defaultValue="가까운 위치선택"
                name="address"
                style={{ width: 200 }}
                onChange={handleChange}
              >
                <Option value="강남">강남</Option>
                <Option value="홍대">홍대</Option>
                <Option value="신림">신림</Option>
                <Option value="서울대입구역">서울대입구역</Option>
                <Option value="건대">건대</Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label="식사메뉴">
              <Input
                placeholder="식사메뉴를 작성해 주세요."
                value={menu}
                name="menu"
                onChange={onChange}
                bordered={false}
              />
            </Descriptions.Item>
            <Descriptions.Item label="한줄평">
              <Input
                placeholder="한줄평을 작성해 주세요."
                value={tagline}
                name="tagline"
                onChange={onChange}
                bordered={false}
              />
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
            name="review"
            value={review}
            onChange={onChange}
          />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 5 }}>
        <Col>
          <Button onClick={onClick}>작성완료</Button>
        </Col>
      </Row>
    </div>
  ) : (
    <>
      <Row justify="center" style={{ marginTop: 5 }}>
        <Col>
          <Typography.Title>로딩중...</Typography.Title>
        </Col>
      </Row>
    </>
  );
}
