import React, { useState } from 'react';

const MyProfile = () => {
  const [followers, setFollowers] = useState([
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
  ]);
  const [following, setFollowing] = useState([
    { name: 'D' },
    { name: 'E' },
    { name: 'F' },
  ]);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  const handleClickFollowers = () => {
    setShowFollowers(!showFollowers);
  };

  const handleClickFollowing = () => {
    setShowFollowing(!showFollowing);
  };

  const handleRemoveFollower = (index) => {
    const updatedFollowers = [...followers];
    updatedFollowers.splice(index, 1);
    setFollowers(updatedFollowers);
  };

  const handleUnfollow = (index) => {
    const updatedFollowing = [...following];
    updatedFollowing.splice(index, 1);
    setFollowing(updatedFollowing);
  };

  return (
    <div>
      <div>
        <button onClick={handleClickFollowers}>Followers</button>{' '}
        <span>{followers.length}</span>
        {showFollowers && (
          <ul>
            {followers.map((follower, index) => (
              <li key={index}>
                {follower.name}{' '}
                <button onClick={() => handleRemoveFollower(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button onClick={handleClickFollowing}>Following</button>{' '}
        <span>{following.length}</span>
        {showFollowing && (
          <ul>
            {following.map((user, index) => (
              <li key={index}>
                {user.name}{' '}
                <button onClick={() => handleUnfollow(index)}>Unfollow</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyProfile;