import React, { Component } from 'react';

import './shop.scss';
import banner from '../../../img/banner.png';

class Shop extends Component {
    render() {
        return (
            <section className='shop'>
                <div className='shop__banner'>
                    <img src={banner} alt='banner' />
                </div>
                <div className='shop__wrapper'>
    
                </div>
            </section>
        );
    }
    
};

// реализовать взаимодействие с device/type из store и сделать динамические карточки девайсов в соответствии с их типами

export default Shop;