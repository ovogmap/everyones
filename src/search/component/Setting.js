import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authService } from "../../fbase";
import { outUser } from "../../common/state";

export default function Setting() {
  const currUser = useSelector((state) => state.main.currUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = () => {
    authService.signOut();
    dispatch(outUser());
  };
  return (
    <>
      <Dropdown
        overlay={
          <Menu>
            {!currUser && (
              <>
                <Menu.Item
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  로그인
                </Menu.Item>

                <Menu.Item
                  onClick={() => {
                    history.push("/account");
                  }}
                >
                  회원가입
                </Menu.Item>
              </>
            )}
            {currUser && <Menu.Item onClick={onLogout}>로그아웃</Menu.Item>}
            {currUser && (
              <Menu.Item
                onClick={() => {
                  history.push("/write");
                }}
              >
                맛집작성
              </Menu.Item>
            )}
          </Menu>
        }
        trigger={["click"]}
        placement="bottomRight"
      >
        <Button shape="circle" icon={<SettingFilled />} />
      </Dropdown>
    </>
  );
}
