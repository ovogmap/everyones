//파이어베이스에 데이터를 가져와서 관리해야하는데
//받아올때 doc아이디값도 같이 받아와야한다.
//doc아이디 값으로 params를 보내고 받은 params로
//search state에 배열 목록에 필터를 돌려서 맏는 아이디값의
//객체를 받아와 디테일 페이지에 나타나게 해야한다.
import produce from "immer";
const FETCH_DATA = "search/FETCH_DATA";
const END_LOADING = "search/END_LOADING";

export const fetchData = (result) => ({ type: FETCH_DATA, result });
export const endLoading = () => ({ type: END_LOADING });

const INITIAL_STATE = {
  isLoading: false,
  posts: [
    {
      //...
    },
  ],
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return produce(state, (draft) => {
        draft.posts = action.result;
        draft.isLoading = true;
      });
    case END_LOADING:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });
    default:
      return state;
  }
}
