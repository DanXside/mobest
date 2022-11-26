import React, { Component } from 'react';
import { connect } from 'react-redux';

import './shop.scss';
import banner from '../../../img/banner.png';
import {devicesLoaded} from '../../../actions';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';
import DeviceItem from '../../deviceItem/deviceItem';

class Shop extends Component {
    render() {
        const {devices, types, loading, error, devicesLoaded} = this.props;
        if (loading) {
            return <Spinner />;
        }
        if (error) {
            return <ErrorIndicator />;
        }
        return (
            <section className='shop'>
                <div className='shop__banner'>
                    <img src={banner} alt='banner' />
                </div>
                <div className='shop__wrapper'>
                    <div className='shop__wrapper_type'>
                        <React.Fragment>
                            {types.map((type) => {    
                                if (type.id === 2) {return type.name}
                            })}
                        </React.Fragment>
                    </div>
                    <div className='shop__wrapper_devices'>
                        <React.Fragment>
                            {devices.map((device) => {
                                return <DeviceItem key={device.id} device={device} />
                            })}
                        </React.Fragment>
                    </div>
                </div>
            </section>
        );
    }
    
};

const mapStateToProps = ({deviceList: {devices, types, loading, error}}) => {
    return {devices, types, loading, error};
};

const mapDispatchToProps = (dispatch) => {
    return {
        devicesLoaded: (newDevices) => dispatch(devicesLoaded(newDevices))
    };
};

// реализовать взаимодействие с device/type из store и сделать динамические карточки девайсов в соответствии с их типами

export default connect(mapStateToProps, mapDispatchToProps)(Shop);