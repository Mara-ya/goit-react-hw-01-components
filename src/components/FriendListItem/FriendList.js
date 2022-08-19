import { OneFriend, FriendStatus, FriendPhoto, FriendName } from './FriendListItem.styled'


export const FriendListItem = ({ isOnline, avatar, name}) => {
    return (
        <OneFriend>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <FriendPhoto src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </OneFriend>
    )
}
