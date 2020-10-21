import produce from "immer";

const REQUEST = "account/REQUEST";
const SET_EMAIL = "account/SET_EMAIL";
const SET_PASS = "account/SET_PASS";
const SET_NICK = "account/SET_NICK";
const FAIL = "account/FAIL";

export const request = () => ({ type: REQUEST });
export const setemail = (email) => ({
  type: SET_EMAIL,
  email,
});
export const setpassword = (password) => ({
  type: SET_PASS,
  password,
});
export const setnickname = (nickname) => ({
  type: SET_NICK,
  nickname,
});
export const fail = (error) => ({ type: FAIL, error });

const INITIAL_STATE = {
  isLoading: null,
  isError: null,
  inputs: {
    email: "",
    password: "",
    nickname: "",
  },
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case SET_EMAIL:
      return produce(state, (draft) => {
        draft.inputs.email = action.email;
      });
    case SET_PASS:
      return produce(state, (draft) => {
        draft.inputs.password = action.password;
      });
    case SET_NICK:
      return produce(state, (draft) => {
        draft.inputs.nickname = action.nickname;
      });
    case FAIL:
      return produce(state, (draft) => {
        draft.isLoading = null;
        draft.currUser = null;
        draft.isError = action.error;
      });
    default:
      return state;
  }
}
