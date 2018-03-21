import * as actions from './apiActions';


const initialState = {
  list: {a: 'Title'},
  isLoadingTitle: false,
  isLoading: false,
  isError: false,
  repositories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LIST_REQUESTED:
      return {
        ...state,
        isLoadingTitle: true,
      };

    case actions.GET_LIST:
      return {
        ...state,
        list: state.list = { a: action.data },
        isLoadingTitle: !state.isLoadingTitle,
      };

    case actions.GET_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case actions.GET_DATA_DONE:
      return {
        ...state,
        isLoading: false,
        repositories: action.payload,
      };

    case actions.GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
