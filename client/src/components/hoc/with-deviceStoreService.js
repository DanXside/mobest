import React from 'react';
import { DeviceStoreConsumer } from '../deviceStore-context/deviceStore-context';

const withDeviceStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <DeviceStoreConsumer>
                {
                    (deviceStoreService) => {
                        return <Wrapped {...props} deviceStoreService={deviceStoreService} />
                    }
                }
            </DeviceStoreConsumer>
        );
    }
}

export default withDeviceStoreService;