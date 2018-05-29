import React from 'react';
import classes from './Burger.css';

import Burgeringredients from '../Burger/Burgeringredients/Burgeringredients';

const Burger = (props) => {
    return(
        <div className={classes.Burger}>
            <Burgeringredients  type="bread-top"/>
            <Burgeringredients  type="cheese"/>
            <Burgeringredients  type="meat" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            <Burgeringredients  type="bread-bottom"/>
        </div>

    );

};

export default Burger;