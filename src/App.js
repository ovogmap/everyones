import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import Search from "./search/container/Search";
import Write from "./write/container/Write";
import Detail from "./detail/container/Detail";
import Login from "./auth/container/Login";
import Account from "./account/container/Account";
import { setUser } from "./common/state";
import { useDispatch, useSelector } from "react-redux";
import { authService } from "./fbase";
function App() {
  const currUser = useSelector((state) => state.main.currUser);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      }
    });
  }, [currUser]);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/write" component={Write} />
        <Route path="/detail/:name" component={Detail} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
      </Switch>
    </>
  );
}

export default App;
