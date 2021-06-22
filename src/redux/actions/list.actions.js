import { SET_LIST, NOT_LOADING } from "../types/list";

const setList = (data) => {
  return {
    type: SET_LIST,
    payload: data,
  };
};

const notLoading = () => {
  return {
    type: NOT_LOADING,
  };
};

export const fetchData = () => async (dispatch) => {
  const response = await fetch("https://api.opendota.com/api/heroStats");
  const data = await response.json();
  dispatch(setList(data));
  console.log("Data :", data);
  dispatch(notLoading());
  console.log("not loading");
};
