import { useState } from 'react'

function Post() {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(120)

  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  const handleComment = () => {
    if (comment.trim() === '') {
      return
    }

    setComments([
      ...comments,
      comment
    ])

    setComment('')
  }

  return (
    <div className="post">

      {/* =========================
          POST HEADER
      ========================= */}

      <div className="post-header">

        <div className="profile-circle">
          😎
        </div>

        <strong>
          rahul_dev
        </strong>

      </div>


      {/* =========================
          POST IMAGE
      ========================= */}

      <div className="post-image-placeholder">
        📷
      </div>


      {/* =========================
          ACTIONS
      ========================= */}

      <div className="post-actions">

        <span onClick={handleLike}>
          {liked ? '❤️' : '🤍'}
        </span>

        <span>
          💬
        </span>

        <span>
          📤
        </span>

      </div>


      {/* =========================
          LIKES
      ========================= */}

      <p className="likes">
        {likes} likes
      </p>


      {/* =========================
          CAPTION
      ========================= */}

      <p>
        <strong>
          rahul_dev
        </strong>{' '}
        Building my first React project 🚀
      </p>


      {/* =========================
          COMMENTS
      ========================= */}

      {comments.length > 0 && (

        <div className="comments-list">

          {comments.map((item, index) => (

            <p key={index}>
              <strong>
                You
              </strong>{' '}
              {item}
            </p>

          ))}

        </div>

      )}


      {/* =========================
          COMMENT INPUT
      ========================= */}

      <div className="comment-section">

        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleComment()
            }
          }}
        />

        <button
          className="comment-button"
          onClick={handleComment}
        >
          Post
        </button>

      </div>

    </div>
  )
}

export default Post