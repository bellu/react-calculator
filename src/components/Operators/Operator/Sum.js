import React from 'react';

const sum = (props) => {
    return (
        <div className="col-md-12  mb-4">
            <button className="btn btn-primary" onClick={props.sumClicked}>+</button>
        </div>
    );
}

export default sum