import { OneFriend, FriendStatus, FriendPhoto, FriendName } from './FriendListItem.styled'


export const FriendListItem = ({ isOnline, avatar, name}) => {
    return (
        <OneFriend>
            <FriendStatus style={{ background: `${friendStatus(isOnline)}` }}>{isOnline}</FriendStatus>
            <FriendPhoto src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </OneFriend>
    )
}

function friendStatus(props) {
    return props ? 'green' : 'red';
  }
