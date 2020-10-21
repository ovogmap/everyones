import produce from "immer";

const REQUEST = "auth/REQUEST";
const SET_EMAIL = "auth/SET_EMAIL";
const SET_PASSWORD = "auth/SET_PASSWORD";
const FAIL = "auth/FAIL";

export const request = () => ({ type: REQUEST });
export const setemail = (email) => ({ type: SET_EMAIL, email });
export const setpass = (password) => ({ type: SET_PASSWORD, password });
export const fail = (error) => ({ type: FAIL, error });

const INITIAL_STATE = {
  isLoading: null,
  isError: null,
  inputs: {
    email: "",
    password: "",
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
        draft.isLoading = false;
        draft.inputs.email = action.email;
      });
    case SET_PASSWORD:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.inputs.password = action.password;
      });
    case FAIL:
      return produce(state, (draft) => {
        draft.isLoading = null;
        draft.inputs = null;
        draft.isError = action.error;
      });
    default:
      return state;
  }
}
