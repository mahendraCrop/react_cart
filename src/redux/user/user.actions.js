import { userActionType } from './user.type'

const setCurrentUser = (user) => {
    return {
        type: userActionType.SET_CURRENT_USER,
        payload: user
    }
}

export default setCurrentUser

