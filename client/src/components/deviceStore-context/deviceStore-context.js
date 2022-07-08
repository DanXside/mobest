import React from 'react';

const {
    Provider: DeviceStoreProvider,
    Consumer: DeviceStoreConsumer
} = React.createContext();

export {
    DeviceStoreConsumer,
    DeviceStoreProvider
};