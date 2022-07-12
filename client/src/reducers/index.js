import updateDeviceList from "./updateDeviceList"
import updateUserState from "./updateUserState"


const reducer = (state, action) => {
    return {
        deviceList: updateDeviceList(state, action),
        userState: updateUserState(state, action)
    };
};

export default reducer;