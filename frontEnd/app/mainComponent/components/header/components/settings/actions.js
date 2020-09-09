import constants from "../../../../../constants/constants";


export const toggleServiceMsg = () => ({ type: constants.TOGGLE_SERVICE_MSG});
export const toggleServiceMsgStore = () => ({ type: constants.TOGGLE_SERVICE_MSG_STORE});
export const toggleBlackList = () => ({ type: constants.BLACK_LIST_ENABLED});
export const setBlackList = (users) => ({ type: constants.BLACK_LIST_USERS, payload: users});