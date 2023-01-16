import { useEffect, useState } from "react";
import FollowBtn from "../utilities/BotaoAzul";

import "../../styles/FollowList.css";

// TODO: remover dados mockados e integrar com backend
const userName = "Daniel Jensen";

export function FollowList() {
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    async function getFollowers() {
      await fetch("https://randomuser.me/api/?results=5")
        .then((response) => response.json())
        .then((data) => setFollowers(data.results));
    }
    getFollowers();
  }, []);

  return (
    <aside
      className="follow-list"
      role="dialog"
      aria-labelledby="followListTitle"
      aria-modal="true"
    >
      <header class="follow-list-header">
        <h2 id="followListTitle">{userName} is following</h2>
        <button className="close-button">
          <i className="fa-solid fa-x" aria-hidden="true"></i>
          <span className="visually-hidden">Close dialog followers list</span>
        </button>
      </header>

      <ul role="list">
        {followers ? (
          followers.map((follower) => {
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
                  <FollowBtn icone="fa-solid fa-user-plus" texto="Follow" />
                </header>
                <p className="profile-bio">{`My name is ${follower.name.first} ${follower.name.last}. I live in ${follower.location.country}`}</p>
              </li>
            );
          })
        ) : (
          <p>nothing to see here ;(</p>
        )}
      </ul>
    </aside>
  );
}
