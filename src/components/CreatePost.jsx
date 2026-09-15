import { useState } from 'react'

function CreatePost({ onClose, onCreate }) {
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = () => {
    if (!caption && !image) {
      alert('Please add an image or caption')
      return
    }

    const newPost = {
      id: Date.now(),
      username: 'rahul_dev',
      caption: caption,
      image: image
    }

    onCreate(newPost)

    setCaption('')
    setImage(null)
  }

  const handleImage = (e) => {
    const file = e.target.files[0]

    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
    }
  }

  return (
    <div className="modal-overlay">

      <div className="create-post-modal">

        <div className="create-post-header">
          <h2>Create New Post</h2>

          <button
            className="close-button"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="create-post-body">

          {image && (
            <img
              src={image}
              alt="Preview"
              className="image-preview"
            />
          )}

          <label className="file-label">
            📷 Choose Image

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </label>

          <textarea
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

        </div>

        <div className="create-post-footer">

          <button
            className="cancel-button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="create-button"
            onClick={handleSubmit}
          >
            Create Post
          </button>

        </div>

      </div>

    </div>
  )
}

export default CreatePost