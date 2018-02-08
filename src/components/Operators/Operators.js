import React from 'react';
import Sum from './Operator/Sum';
import Equal from './Operator/Equal';
import Minus from './Operator/Minus';
import Divide from './Operator/Divide';
import Multiply from './Operator/Multiply';



const operators = (props) => {
    return (
        <div className="col-md-4">
            <div className="row">
                <Sum sumClicked={props.sumClicked}/>
                <Minus minusClicked={props.minusClicked}/>                
                <Divide divideClicked={props.divideClicked}/>   
                <Multiply multiplyClicked={props.multiplyClicked}/>                
                <Equal equalClicked={props.equalClicked}/>                
            </div>           
        </div>
    );
}

export default operators