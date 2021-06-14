import React from 'react';

function NotFound() {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '1em'
            }
        }>
            <div style={
                {textAlign: 'center'}
            }>
                <h1>
                    <i>
                        <b>404</b>
                    </i>
                </h1>
                <h1>Not Found</h1>
            </div>
        </div>
    )
}
export default NotFound;
