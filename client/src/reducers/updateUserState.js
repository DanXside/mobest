const initialState = {
    user: {
        isAuth: false
    }
};

const updateUserState = (state = initialState, action) => {
    
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                isAuth: true
            };
        default: return state;
    };

};

export default updateUserState;