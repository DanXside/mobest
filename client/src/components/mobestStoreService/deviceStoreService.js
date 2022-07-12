export default class DeviceStoreService {
    devicesData = [
        {id: 1, name: 'Apple BYZ S852I', price: 750, img: 'ab4a63f8-66a0-401e-838e-20278e6343bc.jpg', typeId: 2 },
        {id: 2, name: 'Apple EarPods MNHF2ZMA', price: 2299, img: '34e793c2-5ff4-45cf-bf88-26658cbffbea.jpg', typeId: 2 },
        {id: 3, name: 'Apple AirPods', price: 12799, img: '871ee17a-e6e7-4bca-ba82-ca0c0ac5896c.jpg', typeId: 1 }
    ];

    typeData = [
        {id: 1, name: 'Беспроводные наушники'},
        {id: 2, name: 'Наушники'}
    ];

    getDevices() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.devicesData)
            }, 3000);
        });
    };

    getType() {
        return new Promise((resolve) => {
            setTimeout((i) => {
                resolve(this.typeData[i])
            }, 3000);
        });
    }
}