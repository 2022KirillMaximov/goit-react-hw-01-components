import PropTypes from 'prop-types';

import { Friend } from 'components/FriendItem/FriendItem';

import {List} from './FriendList.styled'

export const FriendsList = ({ friends }) => {
    return (
    
        <List>
                  {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend avatar={avatar} name={name} isOnline={isOnline} key={id} />
      ))}
        </List>
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