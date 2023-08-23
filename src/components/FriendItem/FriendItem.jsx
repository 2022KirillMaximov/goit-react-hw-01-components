import PropTypes from 'prop-types';
import { FriendItem,FriendStatus,FriendName } from './FriendItem.styled'

export const Friend = ({ avatar, name, isOnline }) => {
    
    return (
        <FriendItem>
        <FriendStatus isOnline={isOnline} ></FriendStatus>
        <img src={avatar} alt={name} width="100" height="100" />
        <FriendName >{ name}</FriendName>
    </FriendItem>)
}




Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};