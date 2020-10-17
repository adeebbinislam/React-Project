import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    
    componentWillUpdate(){
        console.log("[OrderSummaryWillUpdate]");
    }
    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igkey => {
                return(
                    <li key={igkey}>
                    <span style={{textTransform : 'capitalize'}}>{igkey} : </span> 
                    {this.props.ingredients[igkey]}
                    </li>
                    );
                    }
                ) 
            

        return(
            <Aux>
            <h3> This is your order </h3>
            <p>Your order summary like-- </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Continue to checkout ... </p>
            <p><strong>Total price : {this.props.totalPrice}</strong></p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }

}        
    

export default OrderSummary;