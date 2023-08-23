import PropTypes from 'prop-types';

import { Friend } from 'components/FriendItem/FriendItem';

export const FriendsList = ({ friends }) => {
    return (
    
        <ul>
                  {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend avatar={avatar} name={name} isOnline={isOnline} key={id} />
      ))}
        </ul>
)

}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};