import * as taskApis from './../apis/task';
export const fetchListTask = () => {
  return dispatch => {
    taskApis
      .fetchListTask()
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
};
