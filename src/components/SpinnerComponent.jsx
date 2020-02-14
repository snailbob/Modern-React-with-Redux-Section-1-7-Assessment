import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="ui container">
                <p></p>
                <div className="ui active inverted dimmer">
                    <div className="ui loader"></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;