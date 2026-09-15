function Notifications() {

  return (
    <div className="notifications-page">

      <h2>
        Notifications
      </h2>

      <div className="notification">

        <div className="notification-avatar">
          😎
        </div>

        <p>
          <strong>rahul_dev</strong>
          {' '}liked your post ❤️
        </p>

      </div>


      <div className="notification">

        <div className="notification-avatar">
          👩‍💻
        </div>

        <p>
          <strong>coding_girl</strong>
          {' '}started following you 👤
        </p>

      </div>


      <div className="notification">

        <div className="notification-avatar">
          👨‍💻
        </div>

        <p>
          <strong>developer01</strong>
          {' '}commented on your post 💬
        </p>

      </div>

    </div>
  )
}

export default Notifications