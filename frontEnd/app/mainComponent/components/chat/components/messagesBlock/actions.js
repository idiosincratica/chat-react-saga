import constants from '../../../../../constants/constants';

export const emitMessage = payload => ({type: constants.EMIT_MESSAGE, payload});
export const setCurrentMessage = payload => ({type: constants.SET_CURRENT_MESSAGE, payload});
