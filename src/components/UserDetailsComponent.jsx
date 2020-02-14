import React from 'react';

const UserDetails = ({search}) => {
    return (<React.Fragment>
        <div className="ui icon input">
            <h1>{search}</h1>
            <input type="text" placeholder="Search..." />
            <i className="search icon"></i>
        </div>
    </React.Fragment>
    );
};

export default UserDetails;