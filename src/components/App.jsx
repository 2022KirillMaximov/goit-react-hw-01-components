import user from '../dataFile/user.json'
import data from '../dataFile/data.json';
import friends from '../dataFile/friends.json'


import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics'
import { FriendsList } from './FriendList/FriendList';
const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;








export const App = () => {
  return (
    <div>
          <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}
    />
      <Statistics title="Upload stats" data={data} />
      <FriendsList friends={friends} />
</div>
  );
};
