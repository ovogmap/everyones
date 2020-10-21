import produce from "immer";

const REQUEST = "write/REQUEST";
const USER_INFO = "write/USER_INFO";

export const userinfo = (nickname, creatorId) => ({
  type: USER_INFO,
  nickname,
  creatorId,
});

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
        draft.post.creatorId = action.CreatorId;
      });
  }
}
