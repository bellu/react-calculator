import React from 'react';
import Number from './Number/Number';

const numbers = (props) => {
    return (
        <div className="col-md-9">
            <div className="row mb-4">
                <Number clickedNumber={props.clickedNumber} value="7" />
                <Number clickedNumber={props.clickedNumber} value="8" />
                <Number clickedNumber={props.clickedNumber} value="9" />                
            </div>
            <div className="row mb-4">
                <Number clickedNumber={props.clickedNumber} value="4" />
                <Number clickedNumber={props.clickedNumber} value="5" />
                <Number clickedNumber={props.clickedNumber} value="6" />   
            </div>
            <div className="row mb-4">
                <Number clickedNumber={props.clickedNumber} value="1" />
                <Number clickedNumber={props.clickedNumber} value="2" />
                <Number clickedNumber={props.clickedNumber} value="3" />
            </div>
            <div className="row mb-4">
                <div className="col-md-4">
                    <button className="btn btn-danger" onClick={props.reset}>AC</button>
                </div>
                <Number clickedNumber={props.clickedNumber} value="0" />                
            </div>              
        </div>
    );
}

export default numbers