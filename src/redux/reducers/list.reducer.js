import { SET_LIST, NOT_LOADING } from "../types/list";

const initialState = {
  data: [],
  loading: true,
};

const listReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return { ...currentState, data: action.payload };

    case NOT_LOADING:
      console.log("not loading 1");
      return { ...currentState, loading: false };

    default:
      return currentState;
  }
};

export default listReducer;
