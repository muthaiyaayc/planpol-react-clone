import { useState } from "react";

function Suggestion({ username, emoji }) {
  const [following, setFollowing] = useState(false);

  const handleFollow = () => {
    setFollowing((prev) => !prev);
  };

  return (
    <div className="suggestion">
      <span>{emoji}</span>

      <strong>{username}</strong>

      <button
        onClick={handleFollow}
        className={following ? "following-button" : ""}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default Suggestion;