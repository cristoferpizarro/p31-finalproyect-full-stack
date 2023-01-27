import React from 'react';
import "../../styles/UserProfileCard.css";

function UserProfileCard (props){
    return (
        <div className="user-profile-card">
            <img className="profile-img" src={props.user.image} alt={props.user.name} />
            <div className="user-info">
                <h1>{props.user.name}</h1>
            </div>
        </div>
    );
}

export default UserProfileCard