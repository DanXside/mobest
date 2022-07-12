
const updateDeviceList = (state, action) => {
    if (state === undefined) {
        return {
            devices: [],
            types: [],
            loading: true,
            error: null
        };
    };
    switch (action.type) {
        case 'DEVICES_LOADED':
            return {
                devices: action.payload
            };
        default:
            return state;
    }

}

export default updateDeviceList;