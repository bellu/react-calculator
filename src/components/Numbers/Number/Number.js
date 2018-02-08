import React from 'react';

const numbers = (props) => {
    return (
        <div className="col-md-4  mb-4">
            <button type="button" className="btn btn-outline-primary"  onClick={() => props.clickedNumber(props.value)}>{props.value}</button>
        </div>
    );
}

export default numbers