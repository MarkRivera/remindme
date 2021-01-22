import {
  GET_USER,
  DELETE_USER,
  ADD_USER,
  QUERY_START,
  QUERY_SUCCESS,
  QUERY_ERROR,
} from "../actions/types.js";

const initialState = {
  users: [],
  query: {
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...initialState,
        users: [action.payload],
      };

    case ADD_USER:
      return {
        ...initialState,
        users: [action.payload],
      };

    case DELETE_USER:
      return {
        ...initialState,
        users: state.users.filter(user => user.email !== action.payload),
      };

    case QUERY_START:
      return {
        ...initialState,
        users: [...state.users],
        query: { ...action.payload },
      };

    case QUERY_SUCCESS:
      return {
        ...initialState,
        users: [...state.users],
        query: { ...action.payload },
      };

    case QUERY_ERROR:
      return {
        ...initialState,
        users: [...state.users],
        query: { ...action.payload },
      };
    default:
      return state;
  }
}
