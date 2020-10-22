import React, { useEffect, useState } from "react";
import { AutoComplete, Col, Input, Row, Typography } from "antd";
import Setting from "../component/Setting";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../state/index";
import { storeService } from "../../fbase";
import Posts from "../../posts/container/Posts";
export default function Search() {
  const isLoading = useSelector((state) => state.search.isLoading);
  const [search, setSearch] = useState();
  const [fetchData, setFetchData] = useState();
  const postsRef = storeService.collection("posts");
  postsRef
    .where("name", "==", `${search}`)
    .get()
    .then(function (querySnapshot) {
      return querySnapshot.docs.map((doc) => {
        return doc.data();
      });
    })
    .then((result) => {
      console.log(result);
      const data = result;
    })
    .catch((error) => console.log(error));
  const onChange = (e) => {
    const { name, value } = e.target;
    setSearch(value);
  };
  return isLoading ? (
    <div>로딩중</div>
  ) : (
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
        <Col xs={24} sm={16} xl={12} style={{ background: "#333" }}>
          <AutoComplete
            autoFocus
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{ width: "100%" }}
            options={[]}
          >
            <Input.Search
              size="large"
              name="search"
              value={search}
              onChange={onChange}
              placeholder="검색어를 입력하세요"
            />
          </AutoComplete>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col xs={24} sm={16} xl={12}>
          <Posts />
        </Col>
      </Row>
    </>
  );
}
