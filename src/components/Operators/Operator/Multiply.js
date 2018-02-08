import React from 'react';

const multiply = (props) => {
    return (
        <div className="col-md-12  mb-4">
            <button className="btn btn-primary" onClick={props.multiplyClicked}>*</button>
        </div>
    );
}

export default multiply