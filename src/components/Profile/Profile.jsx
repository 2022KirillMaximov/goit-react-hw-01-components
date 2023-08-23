import PropTypes from 'prop-types';

export const Profile = ({
      username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  followers,
  views,
  likes,
}) => {
  return  (<div >
  <div >
    <img
      src={avatar}
      alt="User avatar"
    />
          <p >{username}</p>
          <p >@{tag }</p>
          <p >{location }</p>
  </div>

  <ul >
    <li>
      <span >Followers</span>
              <span >{followers }</span>
    </li>
    <li>
      <span >Views</span>
              <span >{ views}</span>
    </li>
    <li>
      <span >Likes</span>
              <span >{ likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};