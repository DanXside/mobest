const initialState = {
    isAuth: false
};

const updateUserState = (state = initialState, action) => {
    
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                isAuth: true
            };
        case 'USER_LOGOUT':
            return {
                isAuth: false
            };
        default: return state;
    };

};

export default updateUserState;