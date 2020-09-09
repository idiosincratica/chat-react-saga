import config from "../config/config";
import constants from "../constants/constants";

const configReducer = (state = config, action) => {
    switch (action.type) {
        case constants.TOGGLE_CHAT_MODULE_STORE: return {
            ...state,
            blocksActive: {
                ...state.blocksActive,
                chat: !state.blocksActive.chat,
            }
        };
        case constants.SET_STATUS: return {
            ...state,
            modules: {
                ...state.modules,
                chat: {
                    ...state.modules.chat,
                    status: action.payload
                }
            }
        };
        case constants.TOGGLE_SETTINGS_MODULE_STORE: return {
            ...state,
            blocksActive: {
                ...state.blocksActive,
                settings: !state.blocksActive.settings,
            }
        };
        case constants.TOGGLE_SERVICE_MSG_STORE: return {
            ...state,
            serviceMsg: !state.serviceMsg
        };
        case constants.BLACK_LIST_ENABLED: return {
            ...state,
            blackListEnabled: !state.blackListEnabled
        };
        case constants.BLACK_LIST_USERS:
            return {
                ...state,
                blackList: action.payload
            };
        default:
            return state
    }
};

export {configReducer};