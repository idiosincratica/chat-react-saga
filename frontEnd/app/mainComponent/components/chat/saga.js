import { takeEvery, put, call, take, delay, fork } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import constants from '../../../constants/constants';
import * as actions from './actions';

let ws = null;
let channel = null;
let userName = null;

export default function* watchChatSaga() {
    yield takeEvery(constants.TOGGLE_CHAT_MODULE, toggleChatModule);
    ({userName} = yield take(constants.EMIT_USER_NAME));
    yield takeEvery(constants.INIT_CONNECTION, initConnection);
    yield put({type: constants.INIT_CONNECTION});
    yield takeEvery(constants.EMIT_MESSAGE, emitMessageWorker);
}

function* toggleChatModule() {
    yield put(actions.toggleChatModuleStore());
}

function* emitMessageWorker (action) {
    const text = action.payload.trim();
    yield put(actions.messageReceived('', text));
    if (channel && ws) {
        try {
            yield ws.send(JSON.stringify({mType: 'message', content: text}));
        } catch (err) {
            if (err.name === 'InvalidStateError') {
            } else {
                throw (err);
            }
        }
    }
}

function* initConnection() {
    channel = yield call(createWebSocket);

    while (true) {
        const eventAction = yield take(channel);
        yield put(eventAction);
        if (eventAction.type === 'CLOSE') {
            closeWs();
            yield delay(2000);
            channel = yield call(createWebSocket);
        }
    }
}

export function createWebSocket() {
        ws = new WebSocket('ws://localhost:4000');

    return eventChannel(emitter => {
        ws.onopen = () => {
            emitter(actions.setStatus('ONLINE'));
            ws.send(JSON.stringify({mType: 'user_name', content: userName}));
        };

        ws.onclose = () => {
            emitter(actions.setStatus('DISCONNECTED'));
            emitter({type: 'CLOSE'});
        };

        ws.onmessage = response => {
            const data = JSON.parse(response.data);
            switch(data.mType){
                case 'new_message':
                    emitter(actions.messageReceived(data.content.user, data.content.text));
                    break;
                case 'message_list':
                    emitter(actions.messageHistoryReceived(data.content));
                    break;
                case 'user_list':
                    emitter(actions.userListReceived(data.content));
                    break;
                default:
                    console.log('unfamiliar message was received from server');
            }

        };

        return () => {
            closeWs();
        }
    })
}

export function closeWs() {
    channel.close();
    channel = null;
    ws = null;
    setTimeout(() => channel = createWebSocket(), 2000);
}
