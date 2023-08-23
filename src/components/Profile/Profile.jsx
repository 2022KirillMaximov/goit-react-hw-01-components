import PropTypes from 'prop-types';
import {Wrapper, ProfilInfo, Avatar,Name,Text,StatsWrapper,StatsItem,StatsText} from './Profile.styled'



export const Profile = ({
      username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  followers,
  views,
  likes,
}) => {
  return  (<Wrapper >
  <ProfilInfo >
    <Avatar
      src={avatar}
      alt="User avatar"
    />
          <Name >{username}</Name>
          <Text >@{tag }</Text>
          <Text >{location }</Text>
  </ProfilInfo>

  <StatsWrapper >
    <StatsItem>
      <StatsText >Followers</StatsText>
              <span >{followers }</span>
    </StatsItem>
    <StatsItem>
      <StatsText >Views</StatsText>
              <span >{ views}</span>
    </StatsItem>
    <StatsItem>
      <StatsText >Likes</StatsText>
              <span >{ likes}</span>
    </StatsItem>
  </StatsWrapper>
</Wrapper>)
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