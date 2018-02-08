import React from 'react';

const divide = (props) => {
    return (
        <div className="col-md-12  mb-4">
            <button className="btn btn-primary" onClick={props.divideClicked}>/</button>
        </div>
    );
}

export default divide