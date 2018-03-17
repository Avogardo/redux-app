export const LIST_REQUESTED = 'counter/LIST_REQUESTED'
export const GET_LIST = 'counter/GET_LIST';

const initialState = {
  list: {a: 'Title'},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_REQUESTED:
      return {
        ...state,
        isLoading: true,
      }

    case GET_LIST:
      return {
        ...state,
        list: state.list = {a: action.data},
        isLoading: !state.isLoading,
      }

    default:
      return state;
  }
}

export const getListAsync = () => {
  return dispatch => {
    dispatch({
      type: LIST_REQUESTED,
    });

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_LIST,
          data: json.title,
        });
      })
    ;
  }
};
