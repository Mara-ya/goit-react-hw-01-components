import { FriendListItem } from '../FriendListItem/FriendList'
import { Friends } from './FriendList.styled'


export const FriendList = ({ friends }) => {
    return (<Friends>
        {friends.map(({id, isOnline, avatar, name}) => (
            <FriendListItem key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}>
            </FriendListItem>
        )
        )}
    </Friends>)
}