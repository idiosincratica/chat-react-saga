import { all } from 'redux-saga/effects';
import watchChatSaga from './mainComponent/components/chat/saga';
import watchSettingsSaga from './mainComponent/components/header/saga';

export default function* saga() {
    yield all([
        watchChatSaga(),
        watchSettingsSaga(),
    ]);
}