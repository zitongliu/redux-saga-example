import UsersSagas from './users';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    // resolve all and only act upon it when all are resolved
    yield all([
        ...UsersSagas
    ])
}