import {put,takeLatest, take} from "redux-saga/effects"

function* showTaskAsyn(){
  yield put({type: "SHOW_TASK_ASYNC"})
}


export function* watchDeleteTask(){ 
  yield takeLatest('SHOW_TASK', showTaskAsyn)
}