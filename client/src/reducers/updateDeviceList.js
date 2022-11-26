import headphones from '../img/headphones.jpg';

const updateDeviceList = (state, action) => {
    if (state === undefined) {
        return {
            devices: [
                {
                    id: 1, 
                    name: 'Apple BYZ S852I', 
                    price: 750, 
                    img: headphones, 
                    typeId: 2 
                },
                {
                    id: 2, 
                    name: 'Apple EarPods MNHF2ZMA', 
                    price: 2299, 
                    img: headphones, 
                    typeId: 2 
                },
                {
                    id: 3, 
                    name: 'Apple EarPods MNZMA', 
                    price: 2500, 
                    img: headphones, 
                    typeId: 2 
                },
                {
                    id: 4, 
                    name: 'Apple EarPods MN', 
                    price: 7000, 
                    img: headphones, 
                    typeId: 2 
                },
                {
                    id: 5, 
                    name: 'Apple EarPods MN227Z', 
                    price: 8499, 
                    img: headphones, 
                    typeId: 2 
                },
                {
                    id: 6, 
                    name: 'Apple EarPods MNHJ', 
                    price: 9000, 
                    img: headphones, 
                    typeId: 2 
                },

            ],
            types: [
                {
                    id: 2, 
                    name: 'Наушники'
                },
                {
                    id: 1, 
                    name: 'Беспроводные наушники'
                }
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