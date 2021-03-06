import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }));
    } catch(e) {

    }
}

function* createUser(action) {
    try {
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName});
        yield call(getUsers);
    } catch(e) {

    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

// fork creates child processes
// seperate processes
// run in parallel
const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
];

export default usersSagas;