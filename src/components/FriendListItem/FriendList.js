import PropTypes from 'prop-types';
import { OneFriend, FriendStatus, FriendPhoto, FriendName } from './FriendListItem.styled'


export const FriendListItem = ({id, isOnline, avatar, name}) => {
    return (
        <OneFriend key = {id}>
            <FriendStatus style={{ background: `${friendStatus(isOnline)}` }}>{isOnline}</FriendStatus>
            <FriendPhoto src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </OneFriend>
    )
}

function friendStatus(props) {
    return props ? 'green' : 'red';
  }

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.oneOf([true, false]).isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    )
};