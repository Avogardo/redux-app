export const LIST_REQUESTED = 'counter/LIST_REQUESTED'
export const GET_LIST = 'counter/GET_LIST';

const initialState = {
  list: {a: 5},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_REQUESTED:
      return {
        ...state,
      }

    case GET_LIST:
      return {
        ...state,
        list: state.list = {a: 1},
      }

    default:
      return state;
  }
}

export const getListAsync = () => {
  return dispatch => {
    dispatch({
      type: LIST_REQUESTED,
    })

    return setTimeout(() => {
      dispatch({
        type: GET_LIST,
      })
    }, 1500)
  }
};
