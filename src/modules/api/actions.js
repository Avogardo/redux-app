export const LIST_REQUESTED = 'counter/LIST_REQUESTED'
export const GET_LIST = 'counter/GET_LIST';
export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const GET_DATA_DONE = 'GET_DATA_DONE';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';


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

export function getDataRequested() {
  return {
    type: 'GET_DATA_REQUESTED',
  };
}

export function getDataDone(data) {
  return {
    type: 'GET_DATA_DONE',
    payload: data,
  };
}

export function getDataFailed(error) {
  return {
    type: 'GET_DATA_FAILED',
    payload: error,
  };
}
