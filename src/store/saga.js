import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// api.js
function* fetchUser(...args) {
    const res = yield fetch('/api/mock/fetchUser')
    console.log(res)
    yield put({ type: 'USER_FETCH_REQUESTED1', payload: 'xxx'});

}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
//     console.log('saga')
//    try {
//       const user = yield takeEvery(fetchUser1, action.payload.userId);
//       console.log('user =>> ', user);
//       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }


  // Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  // Allows concurrent fetches of user.

function* mySaga() {
  const res = yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  console.log('res', res)
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;
