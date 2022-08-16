import PropTypes from 'prop-types';
import { UserCard, Description, Avatar, UserName, AdditionalInfo, Stats, StatsItem, StatsLabel, StatsQuantity } from './Profile.styled'


export const Profile = ({avatar, username, tag, location, stats: {followers, views, likes}}) => {
  return (
    <UserCard>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <UserName>{username}</UserName>
        <AdditionalInfo className="tag">{`@${tag}`}</AdditionalInfo>
        <AdditionalInfo className="location">{location}</AdditionalInfo>
      </Description>
      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </Stats>
  </UserCard>)
}

Profile.propTypes = {
  userData: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  })
};