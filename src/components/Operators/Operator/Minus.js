import React from 'react';

const minus = (props) => {
    return (
        <div className="col-md-12  mb-4">
            <button className="btn btn-primary" onClick={props.minusClicked}>-</button>
        </div>
    );
}

export default minus