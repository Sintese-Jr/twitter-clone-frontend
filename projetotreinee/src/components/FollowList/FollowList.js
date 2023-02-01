import { useEffect, useState } from "react";
import FollowBtn from "../utilities/BotaoAzul";

import "../../styles/FollowList.css";

// TODO: remover dados mockados e integrar com backend
const userName = "Daniel Jensen";

export function FollowList(open) {
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(false);
  const [active, setActive] = useState(true);

  function toggleActive() {
    setActive(false);
  }

  function handleClick() {
    setFollowing(!following);
  };

  useEffect(() => {
    async function getFollowers() {
      await fetch("https://randomuser.me/api/?results=5")
        .then((response) => response.json())
        .then((data) => setFollowers(data.results));
    }
    if(open)setActive(true);
    getFollowers();
  }, []);

  if(active) return (
    <aside
      className="follow-list"
      role="dialog"
      aria-labelledby="followListTitle"
      aria-modal="true"
    >
      <div className="overlay" />

      <div className="modal-content modal">
        <header class="follow-list-header">
          <h2 id="followListTitle">{userName} is following</h2>
          <button className="close-button">
            <i className="fa-solid fa-x" aria-hidden="true" onClick={toggleActive}></i>
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
                    <div className="followBtn" onClick={handleClick}>
                      {following === false && <FollowBtn icone="fa-solid fa-user-plus" texto="Follow" />}
                      {following === true && <FollowBtn texto="Following" />}
                    </div>
                  </header>
                  <p className="profile-bio">{`My name is ${follower.name.first} ${follower.name.last}. I live in ${follower.location.country}`}</p>
                </li>
              );
            })
          ) : (
            <p>nothing to see here ;(</p>
          )}
        </ul>
      </div>
    </aside>
  );
}
