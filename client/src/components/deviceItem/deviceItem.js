import React from 'react';

import './deviceItem.scss';
import fav from '../../icons/fav-lit.svg';

const DeviceItem = ({device}) => {
    return (
        <div className='device-card'>
            <div className='device-card_favImg'>
                <img src={fav} alt='favorite' />
                <img src={device.img} alt='device' />
            </div>
            <div className='device-card_name'>
                {device.name}
            </div>
        </div>
    );
};

export default DeviceItem;