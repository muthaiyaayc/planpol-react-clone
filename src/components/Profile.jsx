import { useState } from "react";

function Profile({ posts }) {
  const [following, setFollowing] = useState(false);

  const handleFollow = () => {
    setFollowing((previous) => !previous);
  };

  return (
    <div className="profile-page">

      {/* Profile Header */}
      <div className="profile-header">

        <div className="profile-large">
          👤
        </div>

        <div className="profile-info">

          {/* Username + Buttons */}
          <div className="profile-name-row">

            <h2>rahul_dev</h2>

            <button
              className="edit-profile"
              type="button"
            >
              Edit Profile
            </button>

            <button
              type="button"
              className={`profile-follow ${
                following ? "following" : ""
              }`}
              onClick={handleFollow}
            >
              {following ? "Following" : "Follow"}
            </button>

          </div>

          {/* Stats */}
          <div className="profile-stats">

            <span>
              <strong>{posts.length + 6}</strong> posts
            </span>

            <span>
              <strong>
                {following ? "1.3K" : "1.2K"}
              </strong>{" "}
              followers
            </span>

            <span>
              <strong>350</strong> following
            </span>

          </div>

          {/* Bio */}
          <div className="profile-bio">

            <strong>Rahul Developer</strong>

            <p>
              React Developer 🚀
              <br />
              Building awesome projects 💻
              <br />
              Chennai 📍
            </p>

          </div>

        </div>

      </div>

      {/* Tabs */}
      <div className="profile-tabs">

        <div className="profile-tab active">
          ▦ POSTS
        </div>

        <div className="profile-tab">
          🎞 REELS
        </div>

        <div className="profile-tab">
          👤 TAGGED
        </div>

      </div>

      {/* Posts Grid */}
      <div className="profile-grid">

        <div className="grid-post">📷</div>
        <div className="grid-post">🌄</div>
        <div className="grid-post">💻</div>
        <div className="grid-post">🚀</div>
        <div className="grid-post">☕</div>
        <div className="grid-post">🏙️</div>

        {posts.map((post) => (
          <div
            className="grid-post"
            key={post.id}
          >
            {post.image ? (
              <img
                src={post.image}
                alt={post.caption}
                className="profile-post-image"
              />
            ) : (
              "📷"
            )}
          </div>
        ))}

      </div>

    </div>
  );
}

export default Profile;