import produce from "immer";

const REQUEST = "auth/REQUEST";
const SET_INPUST = "auth/SET_INPUST";
const FAIL = "auth/FAIL";
const NEW_ACCOUNT = "auth/NEW_ACCOUNT";

export const request = () => ({ type: REQUEST });
export const setinput = (email, password, nickname) => ({
  type: SET_INPUST,
  email,
  password,
  nickname,
});
export const fail = (error) => ({ type: FAIL, error });
export const account = () => ({ type: NEW_ACCOUNT });

const INITIAL_STATE = {
  isLoading: null,
  isError: null,
  newaccount: false,
  inputs: {
    email: "",
    password: "",
    nickname: "",
  },
  createUser: {
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
    case SET_INPUST:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.currUser = {
          email: action.email,
          password: action.password,
          nickname: null,
        };
      });
    case FAIL:
      return produce(state, (draft) => {
        draft.isLoading = null;
        draft.currUser = null;
        draft.isError = action.error;
      });
    case NEW_ACCOUNT:
      return produce(state, (draft) => {
        draft.newaccount = true;
      });
    default:
      return state;
  }
}
