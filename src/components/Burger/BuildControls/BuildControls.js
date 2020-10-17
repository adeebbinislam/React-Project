import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label : "Meat" , type : "meat"},
    { label : "Cheese" , type : "cheese"},
    { label : "Salad" , type : "salad"},
    { label : "Bacon" , type : "bacon"}
];

const buildControls = (props) => (
    
    <div className = {classes.BuildControls}>
        <p> Total Price :<strong> {props.price} </strong></p>
        {
            controls.map(ctrl => (
                <BuildControl 
                key = {ctrl.label} 
                label = {ctrl.label} 
                added = {() => props.ingredientAdded(ctrl.type)}
                reduced = {() => props.ingredientReduced(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
                />
            ))
        }
        <button className = {classes.OrderButton} 
        disabled = {!props.perchasable}
        onClick = {props.ordered}
        > 
        Order Now </button>
    </div>
);

export default buildControls;