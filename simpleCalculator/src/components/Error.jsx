import React from 'react';

function Error({ display }) {
    return (
        <div style={{ display: display }}>
            <span>
                error - input should not end with operator
            </span>
        </div>
    );
}

export default Error;
