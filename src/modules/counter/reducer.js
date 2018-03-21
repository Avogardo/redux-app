import * as actions from './actions';


const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      }

    case actions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing,
      }

    case actions.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true,
      }

    case actions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing,
      }

    default:
      return state;
  }
};
