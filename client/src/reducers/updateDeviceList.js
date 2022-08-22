
const updateDeviceList = (state, action) => {
    if (state === undefined) {
        return {
            devices: [
                {id: 1, name: 'Apple BYZ S852I', price: 750, img: 'ab4a63f8-66a0-401e-838e-20278e6343bc.jpg', typeId: 2 },
                {id: 2, name: 'Apple EarPods MNHF2ZMA', price: 2299, img: '34e793c2-5ff4-45cf-bf88-26658cbffbea.jpg', typeId: 2 },

            ],
            types: [
                {id: 1, name: 'Беспроводные наушники'},
                {id: 2, name: 'Наушники'}
            ],
            loading: false,
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