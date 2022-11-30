import React from 'react';

import './deviceItem.scss';
import fav from '../../icons/fav-lit.svg';
import favBlack from '../../icons/fav-black.png';

const DeviceItem = ({device}) => {
    return (
        <div className='device-card'>
            <div className='device-card_favImg'>
                <button className='device-card_favBut'>
                    <img src={fav} alt='favorite' />
                </button>
            </div>
            <div className='device-card_devImg'>
                <img src={device.img} alt='device' />
            </div>
            <div className='device-card_info'>
                <div className='device-card_name'>
                    {device.name}
                </div>
                <span className='device-card_price'>{device.price} P</span>
            </div>
            
        </div>
    );
};

export default DeviceItem;