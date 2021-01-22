import axios from "axios";
import { GET_USER, ADD_USER, DELETE_USER } from "./types";
import { querySuccess, queryError, queryStart } from "./query";
import { QUERY_START, QUERY_SUCCESS, QUERY_ERROR } from "./types";

// GET_USER
export const getUser = id => dispatch => {
  queryStart();
  axios
    .get(`/api/users/${id}`)
    .then(res => {
      querySuccess();
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    })
    .catch(err => {
      queryError();
      console.error(err);
    });
};

// ADD_USER
export const addUser = formState => dispatch => {
  dispatch({
    type: QUERY_START,
    payload: { isLoading: true, isSuccess: false, isError: false },
  });
  axios
    .post(`/api/users/`, formState)
    .then(res => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .then(() => {
      dispatch({
        type: QUERY_SUCCESS,
        payload: { isLoading: false, isSuccess: true, isError: false },
      });
    })
    .catch(err => {
      dispatch({
        type: QUERY_ERROR,
        payload: { isLoading: false, isSuccess: false, isError: true },
      });
      console.error(err);
    });
};

// DELETE_USER
export const deleteUser = email => dispatch => {
  dispatch({
    type: QUERY_START,
    payload: { isLoading: true, isSuccess: false, isError: false },
  });

  axios
    .delete(`/api/users/?email=${email}`)
    .then(res => {
      dispatch({
        type: DELETE_USER,
        payload: email,
      });
    })
    .then(() => {
      dispatch({
        type: QUERY_SUCCESS,
        payload: { isLoading: false, isSuccess: true, isError: false },
      });
    })
    .catch(err => {
      dispatch({
        type: QUERY_ERROR,
        payload: { isLoading: false, isSuccess: false, isError: true },
      });
      console.error(err);
    });
};
