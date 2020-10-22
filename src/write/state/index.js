import produce from "immer";

const REQUEST = "write/REQUEST";
const USER_INFO = "write/USER_INFO";
const SET_NAME = "write/SET_NAME";
const SET_ADDRESS = "write/SET_ADDRESS";
const SET_MENU = "write/SET_MENU";
const SET_TAGLINE = "write/TAGLINE";
const SET_REVIEW = "write/REVIEW";

export const userInfo = (nickName, creatorId) => ({
  type: USER_INFO,
  nickName,
  creatorId,
});
export const setName = (name) => ({ type: SET_NAME, name });
export const setAddress = (address) => ({ type: SET_ADDRESS, address });
export const setMenu = (menu) => ({ type: SET_MENU, menu });
export const setTagline = (tagline) => ({ type: SET_TAGLINE, tagline });
export const setReview = (review) => ({ type: SET_REVIEW, review });

const INITIAL_STATE = {
  isLoading: false,
  post: {
    nickName: "",
    creatorId: "",
    name: "",
    address: "",
    menu: "",
    tagline: "",
    review: "",
  },
};

export default function write(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_INFO:
      return produce(state, (draft) => {
        draft.post.nickName = action.nickName;
        draft.post.creatorId = action.creatorId;
      });
    case SET_NAME:
      return produce(state, (draft) => {
        draft.post.name = action.name;
      });
    case SET_ADDRESS:
      return produce(state, (draft) => {
        draft.post.address = action.address;
      });
    case SET_MENU:
      return produce(state, (draft) => {
        draft.post.menu = action.menu;
      });
    case SET_TAGLINE:
      return produce(state, (draft) => {
        draft.post.tagline = action.tagline;
      });
    case SET_REVIEW:
      return produce(state, (draft) => {
        draft.post.review = action.review;
      });

    default:
      return state;
  }
}
