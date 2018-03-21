import * as actions from './apiActions';


const initialState = {
  list: {a: 'Title'},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LIST_REQUESTED:
      return {
        ...state,
        isLoading: true,
      }

    case actions.GET_LIST:
      return {
        ...state,
        list: state.list = { a: action.data },
        isLoading: !state.isLoading,
      }

    default:
      return state;
  }
};
