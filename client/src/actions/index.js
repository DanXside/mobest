export const devicesLoaded = (newDevices) => {
    return {
        type: 'DEVICES_LOADED',
        payload: newDevices
    };
}