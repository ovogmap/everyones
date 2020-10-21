import React from "react";
import Login from "./Login";
import Title from "../component/Title";
import Account from "../../newaccount/container/Account";
import { useSelector } from "react-redux";
export default function Auth() {
  const newaccount = useSelector((state) => state.auth.newaccount);
  return (
    <>
      <Title />
      {newaccount ? <Account /> : <Login />}
    </>
  );
}
