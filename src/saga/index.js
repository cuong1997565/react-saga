import { fork, take, call, put } from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import { fetchListTask } from './../apis/task';
import { STATUS_CODE } from './../constants';
import { fetchListTaskFailed, fetchListTaskSuccess } from '../actions/task';

function* watchFetchListTaskAction() {
  while(true) {
    yield take(taskTypes.FETCH_TASK);
    const resp = yield call(fetchListTask);
    const { status, data } = resp;
    if(status === STATUS_CODE.SUCCESS){
        //dispatch action fetchListTaskSuccess
        yield put(fetchListTaskSuccess(data));
    } else{
        //dispatch action fetchListTaskFailed
        yield put(fetchListTaskFailed(data));
    }
  }
}
function* watchCreateTaskAction() {
    console.log('watching create task action');
}
function* rootSaga(){
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
}
export default rootSaga;