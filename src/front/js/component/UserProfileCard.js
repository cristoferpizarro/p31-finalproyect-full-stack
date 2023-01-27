import React from 'react';
import "../../styles/UserProfileCard.css";

function UserProfileCard (props){
    return (
        <div className="user-profile-card">
            <img className="profile-img" src={props.user.image} alt={props.user.name} />
            <div className="user-info">
                <h2>{props.user.name}</h2>
                <p>{props.user.email}</p>
                <p>{props.user.location}</p>
            </div>
        </div>
    );
}

export default UserProfileCard