import produce from "immer";

const GET_POSTS = "posts/GET_POSTS";

export const getPosts = (newposts) => ({ type: GET_POSTS, newposts });

const INITIAL_STATE = {
  newposts: [],
};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POSTS:
      return produce(state, (draft) => {
        draft.newposts = action.newposts;
      });
    default:
      return state;
  }
}
