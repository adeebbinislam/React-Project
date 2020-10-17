import React from 'react';
import BurgerLog from '../../assets/images/burger.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className = {classes.Logo} style={{height:props.height}}>
    <img src = {BurgerLog} alt = "burger"/>
    </div>
);

export default logo;