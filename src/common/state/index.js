import produce from "immer";

const SET_CURRUSER = "SET_CURRUSER";
const OUT_CURRUSER = "OUT_CURRUSER";

export const setUser = (user) => ({ type: SET_CURRUSER, user });
export const outUser = () => ({ type: OUT_CURRUSER });
const INITIAL_STATE = {
  currUser: {
    email: "",
    uid: "",
    displayName: "",
  },
};

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRUSER:
      return produce(state, (draft) => {
        draft.currUser = action.user;
      });
    case OUT_CURRUSER:
      return produce(state, (draft) => {
        draft.currUser = null;
      });
    default:
      return state;
  }
}
