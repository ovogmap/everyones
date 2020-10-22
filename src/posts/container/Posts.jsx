import { List, Divider, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { storeService } from "../../fbase";
import { getPosts } from "../state/index";

function Posts() {
  const posts = useSelector((state) => state.search.posts);
  const newposts = useSelector((state) => state.posts.newposts);
  const [getAddress, setAddress] = useState(null);
  const { Option } = Select;
  const dispatch = useDispatch();
  function handleChange(value) {
    setAddress(value);
  }
  const onFilter = (address) => {
    if (address === null) {
      return posts;
    } else {
      const result = posts.filter((item) => item.address === address);
      return result;
    }
  };

  useEffect(() => {
    const result = onFilter(getAddress);
    dispatch(getPosts(result));
  }, [getAddress]);
  return (
    <>
      <Divider>Posts</Divider>
      <Select
        defaultValue={null}
        name="address"
        style={{ width: 150, marginBottom: 50 }}
        onChange={handleChange}
      >
        <Option value={null}>전체</Option>
        <Option value="강남">강남</Option>
        <Option value="홍대">홍대</Option>
        <Option value="신림">신림</Option>
        <Option value="서울대입구역">서울대입구역</Option>
        <Option value="건대">건대</Option>
      </Select>
      <List
        size="large"
        loading={false}
        dataSource={newposts}
        renderItem={(newPost) => (
          <Link to={`detail/${newPost.id}`}>
            <List.Item
              key={newPost.id}
              style={{ borderBottom: "1px solid #d9d9d9" }}
            >
              <List.Item.Meta description={newPost.name} />
              <div>{newPost.nickName}</div>
            </List.Item>
          </Link>
        )}
      />
    </>
  );
}

export default Posts;
