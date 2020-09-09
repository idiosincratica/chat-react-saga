import constants from "../constants/constants";

const messages = {
    currentMessage: '',
    messages: []
};

const messageReducer = (state = messages, action) => {
    switch (action.type) {
        case constants.MESSAGE_RECEIVED:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload
                ]
            };
        case constants.MESSAGE_HISTORY_RECEIVED:
            return {
                ...state,
                messages: [
                    ...action.payload,
                    ...state.messages
                ]
            };
        case constants.SET_CURRENT_MESSAGE:
            return {
                ...state,
                currentMessage: action.payload
            };
        default:
            return state
    }
};

export {messageReducer};