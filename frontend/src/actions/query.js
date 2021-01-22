import { QUERY_START, QUERY_SUCCESS, QUERY_ERROR } from "./types";

// Query Start
export const queryStart = () => dispatch => {
  return dispatch({
    type: QUERY_START,
    payload: { isLoading: true, isSuccess: false, isError: false },
  });
};

// Query Success
export const querySuccess = () => dispatch => {
  return dispatch({
    type: QUERY_SUCCESS,
    payload: { isLoading: false, isSuccess: true, isError: false },
  });
};

// Query Error
export const queryError = () => dispatch => {
  return dispatch({
    type: QUERY_ERROR,
    payload: { isLoading: false, isSuccess: false, isError: true },
  });
};
