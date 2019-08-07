import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import { fetchListTask } from './../apis/task';
import { STATUS_CODE } from './../constants';
import { showLoading, hideLoading } from './../actions/ui';
import { fetchListTaskFailed, fetchListTaskSuccess, filterTaskSuccess } from '../actions/task';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(fetchListTask);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      //dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(data));
    } else {
      //dispatch action fetchListTaskFailed
      yield put(fetchListTaskFailed(data));
    }
    yield delay(2000);
    yield put(hideLoading());

  }
}
// eslint-disable-next-line require-yield
// function* watchCreateTaskAction() {
//   // eslint-disable-next-line no-console
//   console.log('watching create task action');
// }

function* filterTaskSaga({payload}) {
  yield delay(500);
  const { keyword } = payload;
  if(keyword.length > 0) {
    const list = yield select(state => state.task.listTask);
    const filteredTask = list.filter(task => 
      task.title.toLowerCase().includes(keyword.trim().toLowerCase())
    );
    yield put(filterTaskSuccess(filteredTask));
  } else {
    yield fork(watchFetchListTaskAction);
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);  
}
export default rootSaga;
