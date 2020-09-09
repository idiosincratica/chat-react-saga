import constants from "../constants/constants";


const users = {
    users: []
};

const usersReducer = (state = users, action) => {
    switch (action.type) {
        case constants.USER_LIST_RECEIVED:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state
    }
};

export {usersReducer};