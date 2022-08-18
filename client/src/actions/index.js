export const devicesLoaded = (newDevices) => {
    return {
        type: 'DEVICES_LOADED',
        payload: newDevices
    };
};

export const userLogin = () => {
    return {
        type: 'USER_LOGIN'
    };
};

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    };
};