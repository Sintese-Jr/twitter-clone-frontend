import React, { useState } from "react";
import FollowBtn from "../utilities/BotaoAzul"
import "../../styles/FollowList.css";


export function UserFollowList(follower) {
    const [following, setFollowing] = useState(false);

    function handleClick() {
        setFollowing(!following);
    };

    return (
        <li key={follower.login.username} className="profile">
            <header className="profile-header">
                <img
                    src={follower.picture.large}
                    className="profile-thumbnail"
                    alt={`${follower.name.first} ${follower.name.last} profile picture`}
                />
                <div className="profile-info">
                    <h3>
                        {follower.name.first} ${follower.name.last}
                    </h3>
                    <p>120k followers</p>
                </div>
                <div className="followBtn" onClick={handleClick}>
                    {following === false && <FollowBtn icone="fa-solid fa-user-plus" texto="Follow" />}
                    {following === true && <FollowBtn texto="Following" />}
                </div>
            </header>
            <p className="profile-bio">{`My name is ${follower.name.first} ${follower.name.last}. I live in ${follower.location.country}`}</p>
        </li>
    );
}