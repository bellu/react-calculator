import React from 'react';

const equal = (props) => {
    return (
        <div className="col-md-12 mb-4">
            <button className="btn btn-primary" onClick={props.equalClicked}>=</button>
        </div>
    );
}

export default equal