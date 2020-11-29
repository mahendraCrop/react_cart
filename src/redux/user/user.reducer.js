import userAction from "./user.actions";
import { userActionType } from './user.type'

let initial_state = {
    currentUser: null
}

const userReducer = (state = initial_state, userAction) => {
    switch (userAction.type) {
        case userActionType.SET_CURRENT_USER:
            return { ...state, currentUser: userAction.payload };
        default:
            return state;
    }
}

export default userReducer;