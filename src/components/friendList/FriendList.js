import PropTypes from 'prop-types';
import { Friends, OneFriend, FriendStatus, FriendPhoto, FriendName } from './FriendList.styled'


export const FriendList = ({ friends }) => {
    return (<Friends>
        {friends.map(friend => (
            <OneFriend key = {friend.id}>
                <FriendStatus style={{ background: `${friendStatus(friend.isOnline)}` }}>{friend.isOnline}</FriendStatus>
                <FriendPhoto src={friend.avatar} alt="User avatar" width="48" />
                <FriendName>{friend.name}</FriendName>
            </OneFriend>
        ))}
    </Friends>)
}

function friendStatus(props) {
    return props ? 'green' : 'red';
  }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.oneOf([true, false]).isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    )
};