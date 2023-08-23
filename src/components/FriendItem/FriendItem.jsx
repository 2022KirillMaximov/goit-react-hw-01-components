import PropTypes from 'prop-types';


export const Friend = ({ avatar, name, isOnline }) => {
    
    return (
        <li>
        <span isOnline={isOnline} ></span>
        <img src={avatar} alt={name} width="100" height="100" />
        <p >{ name}</p>
    </li>)
}


Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};