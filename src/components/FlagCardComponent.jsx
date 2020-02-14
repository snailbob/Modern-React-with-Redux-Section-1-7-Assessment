import React from 'react';
// import UserDetails from './components/UserDetailsComponent.jsx'

const FlagCard = ({user}) => {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <img alt="avatar" className="right floated mini ui image" src={user.avatar} />
                    <div className="header">
                        {user.email}
                    </div>
                    <div className="meta">
                        {user.jobTitle}
                    </div>
                </div>
                <div className="content">
                    <img alt="flag" className="left floated mini ui image" src={user.flag} />
                    <div className="meta">
                    Elliot requested permission to view your contact details
                    </div>

                </div>
            </div>
        </div>

    );
};

export default FlagCard;